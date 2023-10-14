<template>
  <form @submit.prevent="login" class="auth-form">
    <p>{{ msg }}</p>
    <input type="text" v-model="username" placeholder="Имя пользователя" required>
    <input type="password" v-model="password" placeholder="Пароль" required>
    <button type="submit">Авторизоваться</button>
  </form>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
    if (this.username && this.password) {
      const storedPassword = localStorage.getItem(this.username);

      if (storedPassword === this.password) {
        this.$emit('authenticated', true);
      } else {
        alert('Неправильное имя пользователя или пароль.');
      }
    }
    else {
      alert('Введите имя пользователя и пароль.');
    }
   }
  },
};
</script>

<style scoped>
.auth-form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-form input, .auth-form button {
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.auth-form button {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
