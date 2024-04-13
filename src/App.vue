<!-- App.vue -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//   // async mounted() {
//   //   try {
//   //     for (const URL of this.apiUrls) {
//   //       const response = await fetch(URL); // récupère les données de l'url donnée
//   //       const responseData = await response.json(); // transforme les données en format json

//   //       if (responseData && responseData.tvShow) { // vérifie si la réponse contient des données et si la série existe
//   //         this.showDetails.push(responseData.tvShow); // met dans le tableau les données
//   //       } else {
//   //         this.showDetails.push(null); // si aucune donnée n'est présente, on ajoute un élément null à la fin du tableau
//   //         console.error(`Show details not found for link: ${URL}`);
//   //       }
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // },
// };
</script>

<style>

.menu {
    display: flex;              /* Transformation en flexbox*/
    justify-content: left;     /* Alignements des liens dans le menu */
    padding-left: 10px;
    margin-bottom: -32px;
    font-size: calc(0.5rem +1.5vw);
}

.menu li {
    list-style-type: none ;       /* Suppression des puces */
}

.menu a {
    display:block;                /* Transformation en block */
    min-width: 100px;             /* Largeur minimale des liens */
    color: rgb(11, 8, 41);
}

.menu a:hover {
  background-color: #071c2c; 
  color: white;
}
*/

a{
  color: rgb(11, 8, 41);
}

/* img:hover {
  opacity: 0.3;
} */

h1{
  text-align: center;
  font-size: 22px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
}

header{
  background-color: rgb(236, 215, 255);
  position: fixed;
  top:0;
  width:100%;
  display:inline-block;
  vertical-align:top;
  font-size:13px;
  color: rgb(12, 14, 39);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  z-index: 1000;
}

.banniere{
  width: auto;
  height : 80px;
  margin-left: 39%;
  margin-bottom: -6px;
}

footer{
  background-color: rgb(236, 215, 255);
  position: fixed;
  bottom:0;
  width:100%;
  display:inline-block;
  vertical-align:top;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size:13px;
  color: rgb(0, 0, 0);
}

body{
  background: url('/src/assets/background.jpeg');
  min-height: 100vh; 
  background-repeat: no-repeat;
  background-size: cover; /* Ajuste l'image pour couvrir l'élément entier */
  /* background-position: center; */
}

/* responsive */

@media (max-width: 600px) {

  #icons{
    display: block;
  }
  #icons:before{
    content: "\2630" ; /* menu hamburger */
    padding: 10px;
  }

  .active #icons:before{
    content: "\2715"; /* croix */
  }
  
  nav ul{
    position: fixed;
    left: -100%;
    top: 5%;
    flex-direction: column;
    background-color: rgb(236, 215, 255);
    width: 100%;
    text-align: center;
    transition: 0.2s;
  }

  nav li {
    padding: 3px 0;
  }

  nav li:hover{
    background-color: rgb(200, 147, 247);
  }

  nav.active ul{
    left: 0;
  }

  .banniere{
    margin-left: 20%;
  }

}

@media (min-width: 768px) {

  body{
    background-size: cover;
  }
  
}

@media (min-width: 992px) {

}

@media (min-width: 1200px) {

  body{
    background-size: cover;
  }
  
}

</style>
