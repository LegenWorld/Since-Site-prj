<template>
  <div class="chat">
    <h1>Чат</h1>
    <div v-if="isAuthenticated">
      <div class="chat-window">
        <div class="message-container">
          <div class="chat-messages">
            <div v-for="(message, index) in messages" :key="index" class="chat-message">
              <div class="message-content">{{ message }}</div>
              <button @click="deleteMessage(index)" class="delete-button">
                <img src="@/assets/delete-icon.svg" alt="Delete" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-controls">
      <form @submit.prevent="sendMessage" class="chat-form">
        <input type="text" v-model="newMessage" placeholder="Введите сообщение" class="chat-input">
        <button type="submit" class="chat-button">Отправить сообщение</button>
        <button @click="clearChat" class="delete-all-button">Очистить чат</button>
      </form>
      <button @click="logout" class="logout-button">Выход</button>
    </div>
    </div>
    <div v-else>
      <AuthForm :msg="'Чтобы пользоваться чатом необходимо авторизоваться.'" @authenticated="handleAuthentication" />
      <button @click="toggleRegistrationForm" class="register-button">Регистрация</button>
      <RegistrationForm v-if="showRegistration" @registered="handleRegistration" />
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
  name: 'ChatPage',
  components: {
    AuthForm,
    RegistrationForm,
  },
  data() {
    return {
      messages: [],
      newMessage: '',
      isAuthenticated: false,
      username: '',
      password: '',
      showRegistration: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push(this.newMessage);
        this.newMessage = '';
        this.saveMessages();
      }
    },
    deleteMessage(index) {
      this.messages.splice(index, 1);
      this.saveMessages();
    },
    clearChat() {
      this.messages = [];
      this.saveMessages();
    },
    handleAuthentication(isAuthenticated) {
      this.isAuthenticated = isAuthenticated;
    },
    handleRegistration(isRegistered) {
      if (isRegistered) {
        this.isAuthenticated = true;
      }
    },
    toggleRegistrationForm() {
      this.showRegistration = !this.showRegistration;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
    },
    saveMessages() {
      localStorage.setItem('chatMessages', JSON.stringify(this.messages));
    },
  },
  mounted() {
    const storedMessages = localStorage.getItem('chatMessages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  },
};
</script>

<style scoped>
.chat {
  text-align: center;
}

.chat h1 {
  font-size: 1.5rem;
  margin: 20px 0;
}

.delete-all-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  margin: 10px 0;
}

.delete-button {
  background-color: transparent;
  border: none;
  right: 0;
  width: 5%;
  bottom: 0;
  padding: 0px;
  cursor: pointer;
}

.delete-button img {
  width: 15px;
  height: 15px;
}

.chat-window {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  overflow-y: auto;
  height: 250px;
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
}

.chat-messages {
  display: flex;
  flex-direction: column;
}

.chat-message {
  text-align: left;
  background-color: #FF5722;
  border-radius: 8px;
  max-width: 90%;
  margin: 5px 10px;
  padding: 10px;
  align-self: flex-start;
  display: inline-flex;
}

.chat-form {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.chat-input {
  width: 600px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.chat-button {
  width: 400px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth-form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-form input {
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.auth-form button {
  width: 30%;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
