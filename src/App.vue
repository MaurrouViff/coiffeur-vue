<template>
  <HautDePage/>
  <router-view></router-view>

</template>
<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: white;
}
</style>
<script>
import HautDePage from "./components/header.vue";


export default {
  components: {
    HautDePage
  }
};
</script>