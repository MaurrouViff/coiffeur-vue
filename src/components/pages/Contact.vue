<template>
  <div id="corps">
    <h1>Informations de contact</h1>
    <div>
      <label for="selectColumn" class="label">Sélectionnez une colonne :</label><br />
      <select v-model="selectedColumn" id="selectColumn">
        <option v-for="column in columns" :key="column">{{ column }}</option>
      </select>

      <div v-if="selectedData">
        <p v-if="selectedColumn === 'adresse'">
          <strong>Notre adresse :</strong> <br /> {{ selectedData.adresse }}
        </p>
        <p v-if="selectedColumn === 'telephone'">
          <strong>Notre numéro de téléphone : </strong> <br /> {{selectedData.telephone }}
        </p>
        <p v-else-if="selectedColumn === 'position'">
          <strong>Notre position :</strong><br />
          <a :href="selectedData.position" target="_blank" class="link-to-page">Cliquez ici</a>
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
      contactData: null,
      selectedColumn: 'adresse',
    };
  },
  computed: {
    columns() {
      if (this.contactData && this.contactData.tables.length > 0) {
        return this.contactData.tables[0].columns;
      }
      return [];
    },
    selectedData() {
      if (this.contactData && this.contactData.tables.length > 0) {
        return this.contactData.tables[0].data[0];
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
        const response = await axios.get('/contact.json');
        this.contactData = response.data;
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
.link-to-page {
  color: red;
  text-decoration: none;

}
.link-to-page:hover {
  text-decoration: underline;
}
select {
  position: relative;
  padding: 8px;
  font-size: 16px;
  border: 1px solid black;
  background-color: white;
  color: black;
}

select:active::after,
select:focus::after {
  content: "";
  border-style: solid;
  border-width: 6px 6px 0;
  border-color: black transparent transparent transparent;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

select::after {
  content: "";
  border-style: solid;
  border-width: 0 6px 6px;
  border-color: transparent transparent black transparent;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

select:hover {
  cursor: pointer;
}

select option:checked {
  background-color: black;
  color: white;
}

select option {
  background-color: white;
  color: black;
}

select {
  -moz-appearance: none;
}

select {
  -webkit-appearance: none;
}
</style>
