<template>
  <div class="account-settings">
    <h2>Настройки аккаунта</h2>
    <div v-if="isAuthenticated">
      <form @submit.prevent="updateAccount">
        <div class="form-group">
          <label for="username">Имя пользователя</label>
            <input type="text" id="username" v-model="username" required class="input-field">
          <label for="newPassword">Новый пароль</label>
            <input type="password" id="newPassword" v-model="newPassword" required class="input-field">
        </div>
        <div class="form-group">
          <label for="confirmNewPassword">Подтвердите новый пароль</label>
          <input type="password" id="confirmNewPassword" v-model="confirmNewPassword" required class="input-field">
        </div>
        <button type="submit" class="save-button">Сохранить настройки</button>
      </form>
    </div>
    <div v-else>
      <AuthForm :msg="'Чтобы изменить настройки необходимо авторизоваться.'" @authenticated="handleAuthentication" class="AuthForm" />
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  name: 'AccountSettings',
  components: {
    AuthForm,
  },
  data() {
    return {
      newPassword: '',
      confirmNewPassword: '',
      isAuthenticated: false,
      username: '',
    };
  },
  methods: {
    updateAccount() {
  if (this.newPassword === this.confirmNewPassword) {
    if (this.isAuthenticated) {
      localStorage.setItem('username', this.username);
      localStorage.setItem(this.username, this.newPassword);

      alert('Данные успешно изменены');
      this.isAuthenticated = false;
    } else {
      alert('Чтобы изменить настройки, авторизуйтесь.');
    }
  }
  else {
    alert('Пароли не совпадают.');
  }
},
    handleAuthentication(isAuthenticated) {
      this.isAuthenticated = isAuthenticated;
      this.username = localStorage.getItem('username');
    },
  },
  mounted() {
    this.isAuthenticated = localStorage.getItem('authenticated') === 'true';
    if (this.isAuthenticated) {
      this.username = localStorage.getItem('username');
    }
  },
};
</script>

<style scoped>
.account-settings {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.account-settings h2 {
  font-size: 1.5rem;
  margin: 20px 0;
}

.form-group {
  text-align: center;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-field {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
}

.save-button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
