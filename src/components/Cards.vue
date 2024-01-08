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
        <div class="feature-text">Cliquez sur le bouton "<span style="color: red;">CONTACT</span>" en haut ou <router-link to="/contact" class="link-to-page">cliquez ici</router-link> pour nous contacter !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/image-icon/contact-icon.png" alt="Image de contact" class="image-icon">Contact</div>
        <div class="feature-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid at culpa, eligendi est id illum incidunt maiores modi nisi optio quaerat quod, recusandae reprehenderit sapiente sequi similique sit, velit.</div>
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
  margin-bottom: -80px;
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
</style>
