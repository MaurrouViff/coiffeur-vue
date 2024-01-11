<template>
  <div id="app">
  <HautDePage/>
    <div class="container">
  <router-view></router-view>
    </div>
  <Pied />
  </div>
</template>
<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: white;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  flex-grow: 1;
}
</style>
<script>
import HautDePage from "./components/header.vue";
import Pied from "./components/Pied.vue";

export default {
  components: {
    HautDePage,
    Pied
  }
};
</script>