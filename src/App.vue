<!-- App.vue -->
<template>
  <div id="app">
    <h1>Show Details</h1>
    <br>
    <!-- Affichage du nom et de la description de chaque série -->
    <div v-for="(link, index) in apiUrls" :key="index"> 
      <div v-if="showDetails[index]">
        <h2>Show Name: {{ showDetails[index].name }}</h2>
        <p> Show Description : {{ showDetails[index].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrls : [ // urls des séries que je récupère
      'https://www.episodate.com/api/show-details?q=chuck',
      'https://www.episodate.com/api/show-details?q=brooklyn-nine-nine',
      'https://www.episodate.com/api/show-details?q=the-mentalist',
      'https://www.episodate.com/api/show-details?q=community',
      'https://www.episodate.com/api/show-details?q=new-girl',
      'https://www.episodate.com/api/show-details?q=a-day-found-by-chance', //extraordinary you
      'https://www.episodate.com/api/show-details?q=shooting-stars-tvn', //shooting stars
      'https://www.episodate.com/api/show-details?q=dalli-and-gamjatang', //dali and the cocky prince
      'https://www.episodate.com/api/show-details?q=watch-out-for-this-woman', //suspicious partner
      'https://www.episodate.com/api/show-details?q=we-bare-bears',
      'https://www.episodate.com/api/show-details?q=totally-spies',
      'https://www.episodate.com/api/show-details?q=oggy-et-les-cafards',
      'https://www.episodate.com/api/show-details?q=inspector-gadget'
    ],
      showDetails:[], // tableau qui récupère les données de chaque site de l'API
    };
  },
  async mounted() {
    try {
      for (const URL of this.apiUrls) {
        const response = await fetch(URL); // récupère les données de l'url donnée
        const responseData = await response.json(); // transforme les données en format json

        if (responseData && responseData.tvShow) { // vérifie si la réponse contient des données et si la série existe
          this.showDetails.push(responseData.tvShow); // met dans le tableau les données
        } else {
          this.showDetails.push(null); // si aucune donnée n'est présente, on ajoute un élément null à la fin du tableau
          console.error(`Show details not found for link: ${URL}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
/* Styles peuvent être ajoutés ici */
</style>
