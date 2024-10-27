<template>
  <div class="flex flex-col p-0 m-0 h-screen">
    <HautDePage/>
    <div class="flex-grow">
      <router-view></router-view>
    </div>
    <Pied/>
  </div>
</template>
<script setup>
import HautDePage from "@/components/HautDePage.vue";
import Pied from "@/components/Pied.vue";
</script>