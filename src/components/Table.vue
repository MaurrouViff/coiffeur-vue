<template>
  <div id="corps">
    <h2>Informations sur nos horaires :</h2>
    <div>
      <label for="selectColumn" class="label">Sélectionnez un jour de la semaine :</label><br />
      <select v-model="selectedColumn" id="selectColumn">
        <option value="Tous">Tous</option>
        <option v-for="column in columns" :key="column">{{ column }}</option>
      </select>

      <div v-if="selectedData">
        <p v-if="selectedColumn !== 'Tous'">
          <strong>Voici notre horaire pour {{ selectedColumn }} :</strong> <br /> {{ selectedData[selectedColumn] }}
        </p>
        <p v-else>
          <strong>Voici nos horraires pour tous les jours :</strong> <br />
          <span v-for="(value, column) in selectedData" :key="column">
            <strong>{{ column }}:</strong> {{ value }}<br />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      horraireData: null,
      selectedColumn: 'Tous' // Valeur par défaut pour "Tous"
    };
  },
  computed: {
    columns() {
      if (this.horraireData && this.horraireData.tables.length > 0) {
        return this.horraireData.tables[0].columns;
      }
      return [];
    },
    selectedData() {
      if (this.horraireData && this.horraireData.tables.length > 0) {
        return this.horraireData.tables[0].data[0];
      }
      return null;
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await axios.get('/horraire.json');
        this.horraireData = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    },
  },
};
</script>

<style scoped>
#corps {
  color: black;
  text-align: center;
  justify-content: center;
  justify-items: center;
}

select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgba(12, 239, 205, 0.93);
  border-radius: 4px;

  color: #ffffff;
  width: 10%;
  transition: border-color 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
}

select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

select option {
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  color: #333;
}

select::after {
  content: '\25BC';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}
</style>
