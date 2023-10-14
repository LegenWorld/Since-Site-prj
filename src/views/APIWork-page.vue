<template>
  <div class="api-work">
    <h1 class="section-title">Работа с API</h1>
    <p class="section-description">Здесь вы можете загружать данные с API и управлять ими.</p>

    <ul class="api-list" v-if="apiData">
      <li v-for="(post) in apiData" :key="post.id" class="api-item">
        <h2 class="api-item-title">{{ post.title }}</h2>
        <p class="api-item-body">{{ post.body }}</p>
        <div class="button-container">
      <button @click="changeText(post)">Изменить текст</button>
      <button @click="deleteBlock(post)">Удалить блок</button>
    </div>
      </li>
    </ul>

    <p v-if="error" class="error-message">Произошла ошибка при загрузке данных: {{ error }}</p>

    <p v-if="loading" class="loading-message">Загрузка данных...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'APIWork',
  data() {
    return {
      apiData: null,
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.loading = true;

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.apiData = response.data;
      })
      .catch(error => {
        this.error = error.message;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    changeText(post) {
      const newText = prompt('Введите новый текст:');
    if (newText) {
      post.body = newText;
    }
   },
    deleteBlock(post) {
      const index = this.apiData.indexOf(post);
    if (index !== -1) {
      this.apiData.splice(index, 1);
     }
    },
  },
};
</script>

<style scoped>
.api-work {
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
}

.section-description {
  font-size: 1rem;
  margin-bottom: 20px;
}

.api-list {
  list-style: none;
  padding: 0;
}

.api-item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.api-item-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.api-item-body {
  font-size: 1rem;
  color: #555;
}

button {
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px;
  bottom: 5px;
  right: 5px;
}
.button-container {
  display: flex-inline;
  justify-content: space-between;
}

.error-message {
  color: #ff5722;
  font-size: 1rem;
  margin: 20px 0;
}

.loading-message {
  font-size: 1rem;
  margin: 20px 0;
}
</style>
