<!-- Home.vue -->
<script setup>
import { mounted } from './Data.js';

mounted()
</script>

<template>
    <div class="bloc">
      <div class="intro-text">Welcome to my website ! You can find on my page tv shows that I watched with the summary and some details about them. You can click on a picture or filter by category.</div>
      <br>
      <div class="filtre">
        <label for="categoryFilter">Filter by Category : </label>
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      <br>
      </div>
      <br>
      <div v-if="filterImages" >
        <div class="gallery"> 
          <router-link class="router-link" v-for="image in filteredImages" :key="image.src" :to="'/tvShowsDetails/' + image.alt">
            <div class="image">
              
                <img :src="image.src" :alt="image.title">
                <div class="title">
                {{ image.caption }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { images } from './Data.js';

export default {
    data(){
        return{
      selectedCategory: "", // Catégorie sélectionnée par l'utilisateur
      categories: ["Comedy", "Drama", "Action", "Cartoons", "Romance"],
      filteredImages:[], // Tableau de posters filtrés par catégorie
      search : '',
        };
    },

    computed: {
      // FONCTION POUR FILTRER LES POSTERS DES SERIES PAR CATEGORIE
      filterImages() {
          console.log("Catégorie sélectionnée :", this.selectedCategory);
          if (this.selectedCategory) {
            this.filteredImages = images.filter(image => image.category.includes(this.selectedCategory));
          } else {
            this.filteredImages = images;
          }
          return this.filteredImages;
      },
    },
    
};
</script>

<style>

.intro-text{
  text-align: justify;
  padding-top: 125px;
  align-items: center;
  padding-bottom: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  font-size: 17px;
}

.gallery {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Quatre colonnes dans la grille */
  gap: 10px; /* espaces entre les colonnes */
  padding-bottom: 60px;
}

.filtre {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 17px;
  text-align: center;
  align-items: center;
  z-index: 2;
}

img {
  width: 236px;
  height : 326px;
} 

.image{
  transition: 0.2s;
  color: rgba(227, 194, 253, 0.7);
  padding-bottom: 10px;
}

.image:hover {
  transform: scale(1.1); /* Zoom sur l'image au survol */
  color: rgba(227, 194, 253, 0.7);
}

.title{
  width: 97%;
  height: 100%;
  background: rgba(227, 194, 253, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(14, 13, 42);
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  font-size: 15px;
  margin-top: -6px;
}

.title:hover{
  color: rgb(56, 165, 219);
}

.router-link{
  width: 250px;
}

/* RESPONSIVE */

@media (min-width: 300px) and (max-width: 500px) {
  .intro-text{
    margin-top: -20%;
    width: 95%;
  }

  .gallery{
    gap: 2px;
    grid-template-columns: repeat(2, 1fr);
  }

  img{
    width : 130px;
    height : 180px;
  }

  .title{
    font-size: small;
  }
  
  .router-link{
  width: 140px;
  }

}

@media (min-width: 501px) and (max-width: 900px) {

  .intro-text{
    font-size: 22px;
    width : 95%;
  }

  .bloc{
    margin-left: 8%;
  }

  .gallery{
    width: 80%;
    gap: 5px;
    grid-template-columns: repeat(2, 1fr);
  }

  img{
    width: 200px;
    height: 280px;
  }

  .router-link{
    width: 212px;
  }

}

@media (min-width: 900px) and (max-width: 1023px) {

  .intro-text{
    width: 90%;
  }

  .gallery{
    gap : 8px;
    grid-template-columns: repeat(3, 1fr);
  }

  .title{
    font-size: medium;
    padding-left: 5px;
  }
}

@media (min-width: 1024px) and (max-width: 1064px) {

  .gallery{
    margin-right: 60px;
    gap : 70px;
    grid-template-columns: repeat(3, 1fr);
  }

}


@media (min-width: 1064px) and (max-width: 1219px) {

  .bloc{
    width: 98%;
    margin-left: 5%;
  }

  .intro-text{
    width: 900px;
  }
  
  .image{
    width: 216px;
  }

  img{
    width : 210px;
    height : 280px;
  }

  .router-link{
    width: 220px;
  }
}

@media (min-width: 1220px){
  .bloc{
    margin-left: 6%;
  }

  .filtre{
    scale: 110%;
  }

  .gallery{
    width: 108%;
  }
}

</style>