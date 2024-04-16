<script setup>
import { upload, showDetails2, images } from './Data.js';

upload();
</script>

<template>
        <!-- Affichage du nom et de la description de chaque série --> 
      <div v-if="showDetails2[ $route.params.id ]">
        <div class="box"> 
            <div class="poster"> <img :src="images[$route.params.id].src"> </div>
            <div class="text"> <h2> {{ showDetails2[$route.params.id].name }}</h2> 
                <p> <h3> Show Description : </h3> {{ showDetails2[$route.params.id].description }}
                <br>
                <h3>Genres :</h3> {{ showDetails2[$route.params.id].genres }}
                <br>
                <h3>Airing Debut :</h3> {{ showDetails2[$route.params.id].start_date }}
                <br>
                <h3>Airing Network :</h3> {{ showDetails2[$route.params.id].network }}</p>
            </div>
        </div>
        </div>
</template>

<script>
// import { titi } from './bidule.js'

export default {
    data(){
        return{
            // showDetailsData : null,
            showDetails2 : [],
        };
    },
 
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
    /* padding-bottom: 20px; */
}

@media (max-width: 600px) {
    .box{
        width: 90%;
        display:grid;
        margin-top: -20px;
        margin-bottom: -60px;
        margin-left: -10px;
    }

    .poster{
        margin-left: 40px;
        /* width : 110px;
        height : 160px; */
    }

}

@media (min-width: 601px) and (max-width: 1023px) {

    .box{
        width: 90%;
    }
    /* .text{
        width: 90%;
    }*/
}

@media (min-width: 1024px) and (max-width: 1250px) {

.box{
    width: 180%;
}


/* .text{
    width: 90%;
} */
}

</style>./Data.js