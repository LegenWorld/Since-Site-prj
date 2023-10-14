<template>
    <div class="nav-bar">
      <button @click="navigateTo('/')">Главная</button>
      <button @click="navigateTo('/chat')">Чат</button>
      <button @click="navigateTo('/api-work')">Работа с API</button>
      <button @click="navigateTo('/account-settings')">Настройки аккаунта</button>
    </div>
  </template>

<script>
export default {
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
  
<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  z-index: 1;
}

button {
  transition: transform 0.2s;
  font-size: 1.2rem;
  color: #f5f5f5;
  background-color: #333;
  margin: 5px;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
}
</style>
