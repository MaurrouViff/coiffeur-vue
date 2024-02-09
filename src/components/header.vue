<template>
<div>
  <header>
    <nav class="navbar">
      <ul class="nav-menu">
        <li class="nav-item"><h2>Salon Nuances</h2></li>
        <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="link-button">CONTACT</router-link></li>
        <li class="nav-item"><router-link to="/personnel" class="link-button">PERSONNEL</router-link></li>
        <li class="nav-item"><router-link to="/horraire" class="link-button">HORRAIRE</router-link></li>
        <li class="nav-item"><router-link to="/propos" class="link-button">À PROPOS</router-link></li>
        <li class="nav-item"><router-link to="/galerie" class="link-button">GALERIE</router-link></li>
      </ul>
    </nav>
  </header>
  <hr>
</div>
</template>

<style scoped>
.link-button {
  color: #000000;
  padding: 20px 30px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}
.link-button:hover {
  background-color: black;
  color: white;
}
.navbar {
  min-height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: #ffffff;
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
  background-color: #ffffff;
}
h2 {
  color: #000000;
}
hr {
  height: 5px;
  border: 0;
  background-color: black;
}
</style>