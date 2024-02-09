<template>
<div>
  <h2>Les tarifs de nos services : </h2>
  <table>
    <thead>
      <tr>
        <th>Type de service</th>
        <th>Cheveux court</th>
        <th>Cheveux mi-longs</th>
        <th>Cheveux longs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="important">Féminin, 18 et plus</td>
      </tr>
    <tr>
      <td>SHAMPOING</td>
      <td>2.00</td>
      <td>3.00</td>
      <td>4.00</td>
    </tr>
      <tr>
        <td>SHAMPOING + SOIN</td>
        <td>4.00</td>
        <td>6.00</td>
        <td>8.00</td>
      </tr>
      <tr>
        <td>SHAMPOING SECHAGE</td>
        <td>11.00</td>
        <td>14.00</td>
        <td>17.00</td>
      </tr>
      <tr>
        <td>SHAMPOING BRUSHING</td>
        <td>23.00</td>
        <td>27.00</td>
        <td>31.00</td>
      </tr>
      <tr>
        <td>SHAMPOING COUPE SANS SACHAGE</td>
        <td>25.00</td>
        <td>30.00</td>
        <td>34.00</td>
      </tr>
      <tr>
        <td>SHAMPOING COUPE SECHAGE</td>
        <td>33.00</td>
        <td>38.00</td>
        <td>43.00</td>
      </tr>
      <tr>
        <td>SHAMPOING COUPE BRUSH OU MIS EN PLUS</td>
        <td>39.00</td>
        <td>47.00</td>
        <td>51.00</td>
      </tr>
      <tr>
        <td>BOUCLAGE AU FER (tarif suivant le temps passé)</td>
        <td>39.00 (1H00)</td>
        <td>58.00 (1H30)</td>
        <td>77.00 (2H00)</td>
      </tr>
      <tr>
        <td>CHIGNON (tarif suivant le temps passé)</td>
        <td>39.00 (1H00)</td>
        <td>58.00 (1H30)</td>
        <td>77.00 (2H00)</td>
      </tr>
      <tr>
        <td>ESSAIE + CHIGNON DE MARIAGE</td>
        <td>Pas disponible</td>
        <td>84.00 (1H00 + 1H30)</td>
        <td>107.00 (1H00 + 2H00)</td>
      </tr>
    <tr>
      <td class="important">ENFANTS - ADO</td>
    </tr>
    <tr>
      <td>FILLE -10 ANS - COUPE SECHAGE</td>
      <td>17.00 à 19.00</td>
      <td>19.00 à 22.00</td>
      <td>22.00 à 27.00</td>
    </tr>
      <tr>
        <td>FILLE -10 ANS - SHAMPOING COUPE SECHAGE</td>
        <td>19.00 à 21.00</td>
        <td>21.00 à 24.00</td>
        <td>24.00 à 29.00</td>
      </tr>
      <tr>
        <td>FILLE -14 ANS - SHAMPOING COUPE SECHAGE</td>
        <td>21.00 à 23.00</td>
        <td>23.00 à 26.00</td>
        <td>26.00 à 31.00</td>
      </tr>
      <tr>
        <td>FILLE -18 ANS - SHAMPOING COUPE SECHAGE</td>
        <td>28.00 à 31.00</td>
        <td>31.00 à 34.00</td>
        <td>34.00 à 37.00</td>
      </tr>
      <tr>
        <td>FILLE -18 ANS - SHAMPOING COUPE BRUSH</td>
        <td>33.00 à 36.00</td>
        <td>36.00 à 39.00</td>
        <td>39.00 à 42.00</td>
      </tr>
    </tbody>
  </table>
</div>

</template>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  margin: 0 auto;
  background-color: black;
  color: white;
  opacity: 1;
}

td, th {
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 8px;
  box-shadow: 0 0 0 1px rgb(0, 0, 0);
  margin: -2px;
}
th {
  color: lightblue;
}
.important {
  color: red;
}
</style>
<script setup>
</script>