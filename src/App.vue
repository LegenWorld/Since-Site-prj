<template>
  <div id="app">
    <NavBar />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>


<style>
#app {
  display: block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 10rem;
}
</style>