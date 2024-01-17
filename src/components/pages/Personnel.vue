<template>
  <div id="corps">
    <h1>Informations du personnel</h1>
    <div v-if="personnelData">
      <label for="selectNom" class="label">Sélectionnez un nom :</label><br />
      <select v-model="selectedNom" id="selectNom">
        <option v-for="personnel in personnelData.tables[0].data" :key="personnel.id">{{ personnel.nom }}</option>
      </select>

      <div v-if="selectedNom">
        <div v-for="personnel in personnelData.tables[0].data" :key="personnel.id">
          <div v-if="personnel.nom === selectedNom">
            <p><strong>Nom :</strong> {{ personnel.nom }}</p>
            <p><strong>Prénom :</strong> {{ personnel.prenom }}</p>
            <p><strong>Métier :</strong> {{ personnel.metier }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Chargement des données...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      personnelData: null,
      selectedNom: null,
    };
  },
  computed: {
    columns() {
      if (this.personnelData && this.personnelData.tables.length > 0) {
        return this.personnelData.tables[0].columns;
      }
      return [];
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await axios.get('/personnel.json');
        this.personnelData = response.data;
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
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
.label {
  margin-bottom: 10px;
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
