<template>
<div>
  <section class="first-section">
    <div class="features">
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/equipe-icon.svg" alt="Image d'une équipe" class="image-icon">Équipe</div>
        <div class="feature-text">Nous sommes une équipe de trois coiffeures prêtes à vous accueullir !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/stagiaire-icon.png" alt="Image de stagiaire" class="image-icon">Stagiaire</div>
        <div class="feature-text">Nous prenons des stagiaires lors de leur stage d'observation en classe de 3ème !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/contact-icon.png" alt="Image de contact" class="image-icon">Contact</div>
        <div class="feature-text">Cliquez sur le bouton "<span id="span-contact">CONTACT</span>" pour nous contacter</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/clock.svg" alt="Image d'horloge" class="image-icon">Horraire</div>
        <div class="feature-text">Si vous désirez savoir nos horraires, vous devez cliquer sur le bouton "<span id="span-contact">HORRAIRE</span>" ou <router-link class="link-to-page" to="/horraire">cliquez ici</router-link></div>
      </div>
    </div>
  </section>
  <section class="second-section">
    <div class="features">
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/heart.svg" alt="Image de coeur" class="image-icon">Bonne réputation</div>
        <div class="feature-text">Nous avons très bonne réputation dans la ville de Charleville-Mézières !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/coiffure.svg" alt="Image de coiffure" class="image-icon">Coiffure</div>
        <div class="feature-text">Nous faisons des coiffures pour hommes comme femmes !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/experience.png" alt="Image d'expérience" class="image-icon">Expérience</div>
        <div class="feature-text">Nous avons plusieurs années d'expériences dans l'univers de la coiffure !</div>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>
.features {
  max-width: 1300px;
  margin: 100px -180px 0 0;
  display: flex;
}
.features .feature {
  flex: 1 1 340px;
  padding: 25px 30px 35px 58px;
  margin: 0 8px 0 0;
  opacity: 0.9;
  border: 2px solid;
  color: black;
  transition: background-color 0.3s, color 0.3s;
}
.features .feature:hover {
  background-color: black;
  color: white;
  opacity: 1;
}
.features .feature .feature-title {
  font-size: 24px;
  line-height: 1.6;
  letter-spacing: -0.38px;
  margin: 0 0 0 -35px;
  padding: 0 0 20px 35px;
  font-weight: 300;
}

.features .feature .feature-text {
  font-size: 16px;
  letter-spacing: -0.29px;
  line-height: 1.7;
}
.image-icon {
  width: 45px;
  height: 45px;
  padding-right: 20px;
  transition: filter 0.3s;
}
.features .feature:hover .image-icon {
  filter: brightness(0) invert(1);
}
.first-section {
  min-height: 20vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.link-to-page {
  color: red;
  text-decoration: none;
  opacity: 0.8;
}
.link-to-page:hover {
  opacity: 1;
  text-decoration: underline;
}
#span-contact {
  color: red;
}
.second-section {
  min-height: 20vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}
</style>
<script setup>
</script>