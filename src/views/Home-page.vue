<template>
  <div class="home">
    <h1 class="welcome-heading">Домашняя страница</h1>
    <p class="secondary-text">Приветствую вас на своем проекте. Это лишь маленький и не оптимизированный шаблончик. Надеюсь на хорошую оценку и конструктивную критику. </p>
    <h2>О проекте</h2>
     <p class="secondary-text">Выше есть навигационное меню-бар в котором вы можете выбрать интересные вам пункты.</p>
     <p class="secondary-text">Для того, чтобы использовать чат, вам необходимо авторизоваться либо зарегистрироваться.</p>
     <p></p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
.home {
  display: block;
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.welcome-heading {
  font-size: 2rem;
  margin: 0;
  color: #333;
}

.secondary-text {
  font-size: 1.2rem;
  color: #666;
}
</style>
