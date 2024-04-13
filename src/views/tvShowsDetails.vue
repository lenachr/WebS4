<script setup>
import { mounted, showDetails, apiUrls, images } from './bidule.js';

// mounted()
</script>

<template>
        <!-- Affichage du nom et de la description de chaque série --> 
      <div v-if="showDetails[ $route.params.id ]">
        <div class="box"> 
            <div class="poster"> <img :src="images[$route.params.id].src"> </div>
            <div class="text"> <h2> {{ showDetails[$route.params.id].name }}</h2> 
                <p> <h3> Show Description : </h3> {{ showDetails[$route.params.id].description }}
                <br>
                <h3>Genres :</h3> {{ showDetails[$route.params.id].genres }}
                <br>
                <h3>Airing Debut :</h3> {{ showDetails[$route.params.id].start_date }}
                <br>
                <h3>Airing Network :</h3> {{ showDetails[$route.params.id].network }}</p>
            </div>
        </div>
        </div>
</template>

<script>
// import { titi } from './bidule.js'

export default {
    data(){
        return{
            showDetailsData : null,
            // showDetails : [],
        };
    },

    // mounted(){
    //     // titi()
    //     mounted()
    //     // const response = await fetch(`https://www.episodate.com/api/show-details?q=${route.params.id}`); // récupère les données de l'url donnée
    //     // const responseData = await response.json(); // transforme les données en format json

    //     // if (responseData && responseData.tvShow) { // vérifie si la réponse contient des données et si la série existe
    //     //   this.showDetails.push(responseData.tvShow); // met dans le tableau les données
    //     // }
    //     // console.log("données récupérées");
    //     // console.log(responseData.tvShow.name);
    // },

    // mounted(){
    //     const storedDetails = localStorage.getItem('showDetailsData');
    //     if (storedDetails) {
    //       this.showDetailsData = JSON.parse(storedDetails);
    //       console.log(showDetailsData);
    //     }
    //     else {
    //     // Si les données ne sont pas déjà enregistrées localement, récupérez-les depuis les APIs
    //     fetch(apiUrls).then(() => {
    //     // Une fois les données récupérées, mettez à jour votre composant avec les nouvelles données
    //     this.showDetailsData = JSON.parse(localStorage.getItem('showDetailsData'));
    //     });
    //     }
    // }   
};


</script>

<style>

h2{
    font-weight: 700;
}

h3{
    font-weight: 500;
    font-size: medium;
}

.box{
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
    padding-bottom: 50px;
}

.text{
    transform: translateX(40px);
    display:block;                /* Transformation en block */
    /* min-width: 850px; */
    text-align: justify;
}

@media (max-width: 600px) {
    .box{
        width: 90%;
        display:grid;
        margin-top: -20px;
        margin-bottom: -60px;
    }

    .poster{
        margin-left: 40px;
        /* width : 110px;
        height : 160px; */
    }

}
</style>