<template>
  <div>
    <h2 :class="{ 'animate-opacity': animateOpacity }" style="color: red;">⚠ ATTENTION ⚠</h2>
    <h3>Nous ne travaillons ni le lundi ni le dimande.</h3>
    <h3>Nous ne travaillons également en aucun cas les jours fériés.</h3>
  </div>
</template>
<style scoped>
@keyframes fadeInOut {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
}

.animate-opacity {
  animation: fadeInOut 3s infinite;
}

div {
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      animateOpacity: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.animateOpacity = !this.animateOpacity;
    }, 3000);
  },
};
</script>
