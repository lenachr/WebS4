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
        <!-- <input type="text" v-model="search" placeholder="Look for a tv show"> -->
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
import { images } from './Data.js';

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
    
};
</script>

<style>

.bloc{
  /* width: 1000px; */
  /* align-items: center; */
  /* margin: 0 auto; */
  
}

.intro-text{
  /* width: 1100px; */
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
  /* width: 1100px; */
  /* scale: 120%; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 17px;
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

/* RESPONSIVE */

@media (min-width: 200px) and (max-width: 500px) {
  .intro-text{
    /* font-size: 22px; */
    text-align: justify;
    /* width: 100px; */
    /* margin-left: 10%; */
  }

  .gallery{
    /* margin-right: 100px; */
    /* width: 80%; */
    grid-template-columns: repeat(2, 1fr);
  }

  .router-link{
  width: 190px;
}

}

@media (min-width: 500px) and (max-width: 600px) {

  .box{
    /* width: 120%; */
    margin-left: 10%;
  }
  
  .intro-text{
    /* /* font-size: 22px; */
    text-align: justify;
    width: 450px;
  }

  .filtre{
    /* margin-left: 5%; */
  }

  .gallery{
    /* margin-right: 100px; */
    /* width: 80%; */
    grid-template-columns: repeat(2, 1fr);
  }

  img{
    width: 200px;
    height: 280px;
  }

}

@media (min-width: 601px) and (max-width: 900px) {

  .intro-text{
    font-size: 22px;
    text-align: justify;
    width: 500px;
  }

  .bloc{
    width: 95%;
    margin-left: 8%;
  }

  .gallery{
    /* margin-right: 100px; */
    /* width: 80%; */
    grid-template-columns: repeat(2, 1fr);
  }

  /* .image{
    width: 190px;
  } */

  /* img{
    width : 190px;
    height : 260px;
    /* width: 90%; */
    /* height: 90%; 
  } */

}

@media (min-width: 900px) and (max-width: 1064px) {

  .bloc{
    /* width: 90%; */
    margin-left: 15%;
  }

  .intro-text{
    width: 800px;
  }

  /* .box{
    /* width: 1000px; */
    /* margin-left: 10%; 
  } */

  .gallery{
    /* margin-right: 100px; */
    /* width: 20%; */
    /* width: 90%; */
    grid-template-columns: repeat(3, 1fr);
  }

  .title{
    /* width: 74%; */
    /* height: 95%; */
    font-size: medium;
    padding-left: 5px;
  }
}

@media (min-width: 1064px) and (max-width: 1219px) {

  .bloc{
    /* width: 98%; */
    margin-left: 14%;
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

</style>./Data.js./Data.js