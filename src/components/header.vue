<script setup>

</script>

<template>
<div>
  <header>
    <nav class="navbar">
      <ul class="nav-menu">
        <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
        <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
        <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
        <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
      </ul>
    </nav>
  </header>
</div>
</template>

<style scoped>
.link-button {
  color: #ffffff;
  padding: 20px 30px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  opacity: 0.8;
}
.link-button:hover {
  opacity: 1;
}
.navbar {
  min-height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: #000000;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-right: 50px;
}
li {
  list-style-type: none;
}
header {
  text-align: center;
  justify-content: center;
}
</style>