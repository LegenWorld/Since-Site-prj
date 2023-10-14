<template>
    <form @submit.prevent="register" class="registration-form">
      <p>Зарегистрируйтесь, чтобы пользоваться чатом</p>
      <input type="text" v-model="regUsername" placeholder="Имя пользователя" required>
      <input type="password" v-model="regPassword" placeholder="Пароль" required>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        regUsername: '',
        regPassword: '',
      };
    },
    methods: {
      register() {
        if (this.regUsername && this.regPassword) {
        if (localStorage.getItem(this.regUsername) !== null) {
              alert('Пользователь с таким именем уже зарегистрирован.');
            }
        else {
            localStorage.setItem(this.regUsername, this.regPassword);
            this.$emit('registered', true);
            this.$emit('authenticated', true);
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
  .registration-form {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .registration-form input, .registration-form button {
    width: 30%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .registration-form button {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  