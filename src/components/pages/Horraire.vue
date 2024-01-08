<template>
<div>
  <WarningHorraire />
  <hr>
  <Tableau />
</div>
</template>
<script>
import Tableau from "../Table.vue";
import WarningHorraire from "../WarningHorraire.vue";


export default {
  components: {
    Tableau,
    WarningHorraire
  }
};
</script>
<style scoped>
hr {
  height: 5px;
  border: 0;
  background-color: black;
}
</style>