<script setup>
import { mounted, showDetails } from './bidule.js';

mounted()
</script>

<template>
    
    <div class="bloc">
      <div class="intro-text">Welcome to my website ! You can find on my page tv shows that I watched with the summary and some details about them. You can search a TV show and filter by category.</div>
      <br>
      <div class="filtre">
        <label for="categoryFilter">Filter by Category : </label>
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      <br>
        <input type="text" v-model="search" placeholder="Look for a tv show">
        <!-- <button @click="toggleImage">Search</button> -->
      </div>
      <!-- <img v-if="foundImage" :src="foundImage.src" :alt="foundImage.title"> -->
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
import { images } from './bidule.js';

export default {
    data(){
        return{
      selectedCategory: "", // Catégorie sélectionnée par l'utilisateur
      categories: ["Comedy", "Drama", "Action", "Cartoons", "Romance"],
      filteredImages:[],
      search : '',
      a : 1,
      b : 1,
        };
    },

    computed: {

      bidule(){
        let tab = [1,2,3];
        tab = tab.filter(nb => nb > this.a);
        return tab;
      }, 

      filterAndSearchImages() {
        const filteredByCategory = this.selectedCategory ?
          this.images.filter(image => image.category.includes(this.selectedCategory)) :
          this.images;

        const searchTerm = this.search.toLowerCase();
        const filteredBySearch = searchTerm ?
          filteredByCategory.filter(image => image.caption.toLowerCase().includes(searchTerm)) :
          filteredByCategory;

        return filteredBySearch;
      },

      filterImages() {
          console.log("Catégorie sélectionnée :", this.selectedCategory);
          if (this.selectedCategory) {
            this.filteredImages = images.filter(image => image.category.includes(this.selectedCategory));
          } else {
            this.filteredImages = images;
          }
          return this.filteredImages;
      },
        
      foundImage() {
        const searchTerm = this.search.toLowerCase(); // Convertir le terme de recherche en minuscules
        return this.images.find(image => image.caption.toLowerCase().includes(searchTerm)); // Recherche de l'image correspondante
        // return this.filteredImages = this.images.filter((image) =>
        //   image.caption.toLowerCase().includes(searchTerm));
      }
    },

    methods: {
      toggleImage() {
        this.filteredImages = !this.filteredImages; // Toggle the visibility of the image
      }
    }
    
};
</script>

<style>

.bloc{
  width: 1000px;
  /* align-items: center; */
  margin: 0 auto;
}

.intro-text{
  padding-top: 125px;
  /* padding-left: 10px; */
  align-items: center;
  /* text-align: center; */
  padding-bottom: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  font-size: 17px;
  /* background-color: aliceblue; */
}

.gallery {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Quatre colonnes dans la grille */
  gap: 10px; /* espaces entre les colonnes */
  padding-bottom: 60px;
}

.filtre {
  scale: 110%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* padding-bottom: 2px; */
  text-align: center;
  align-items: center;
  z-index: 2;
}

img {
  /* display: inline-block; */
  /* width : 110px;
  height : 160px; */
  width: 236px;
  height : 326px;
} 

.image{
  /* opacity: 1; */
  transition: 0.2s;
  color: rgba(227, 194, 253, 0.7);
  padding-bottom: 10px;
}

.image:hover {
  /* opacity: 0.3; */
  transform: scale(1.1); /* Zoom sur l'image au survol */
  color: rgba(227, 194, 253, 0.7);
}

.title{
  width: 97%;
  height: 100%;
  /* top : 0;
  left: 0; */
  background: rgba(227, 194, 253, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(14, 13, 42);
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  font-size: 15px;
  margin-top: -6px;
  /* transform: translateY(-200px); */
  /* opacity: 0; */
  /* transition: 0.6s; */
}

.router-link{
  width: 250px;
}

/* .title:hover {
  opacity: 1;
} */

/* RESPONSIVE */

@media (max-width: 600px) {

  .intro-text{
    font-size: 22px;
    text-align: justify;
  }

  img{
    width: 200px;
    height: 280px;
  }

}

@media (max-width: 900px) {

  .intro-text{
    font-size: 22px;
    text-align: justify;
  }

  .bloc{
    width: 95%;
  }

  .gallery{
    /* margin-right: 100px; */
    /* width: 80%; */
    grid-template-columns: repeat(2, 1fr);
  }

  .title{
    /* width: 73%; */
    /* height: 90%; */
    /* font-size: 80%; */
  }

  .image{
    width: 190px;
  }

  img{
    width : 190px;
    height : 260px;
    /* width: 90%; */
    /* height: 90%; */
  }

}

@media (min-width: 900px) and (max-width: 1000px) {

  .bloc{
    width: 90%;
  }
  .gallery{
    /* margin-right: 100px; */
    /* width: 20%; */
    grid-template-columns: repeat(3, 1fr);
  }

  .title{
    /* width: 74%; */
    /* height: 95%; */
    font-size: medium;
    padding-left: 5px;
  }
}

@media (min-width: 1200px){
  .bloc{
    align-items: center;
  }

  .gallery{
    width: 115%;
  }

  /* .title{
    width: 95%;
    height: 95%;
  } */
}

</style>