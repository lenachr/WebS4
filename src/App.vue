<!-- App.vue -->
<template>
    <router-view></router-view>
</template>

<script>
</script>

<style>

.menu {
    display: flex;              
    justify-content: left;     /* Alignements des liens dans le menu */
    padding-left: 10px;
    margin-bottom: -32px;
    font-size: calc(0.5rem +1.5vw);
}

.menu li {
    list-style-type: none ;       /* Suppression des puces */
}

.menu a {
    font-weight: 600;
    display:block;               
    min-width: 100px;             /* Largeur minimale des liens */
    color: rgb(0, 0, 0);
}

.menu a:hover {
  background-color: rgb(236, 215, 255); 
  color: rgb(56, 165, 219);
}
*/

a{
  color: rgb(11, 8, 41);
}


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
  display: flex;
  justify-content: center;
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
  margin-top: 30px;
  margin-left: -250px;
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
  background-position: center;
}

/* RESPONSIVE */

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
  }

  nav li {
    padding: 3px 0;
  }

  nav li:hover{
    background-color: rgb(236, 215, 255);
  }

  nav.active ul{
    left: 0;
  }

  .banniere{
    height: 62px;
    margin: auto;
  }

  h1{
    font-size: 12px;
  }

}

</style>
