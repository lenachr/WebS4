const showDetails = [];

// TABLEAU D'IMAGES + TITRES + GENRES
let images = [
  { src: "/src/assets/1_chuck.jpg", alt: "0", caption: "Chuck", category : ["Comedy","Drama","Action"] },
  { src: "/src/assets/2_b99.jpg", alt: "1", caption: "Brooklyn Nine-Nine", category : ["Comedy","Crime","Action"] },
  { src: "/src/assets/3_the-mentalist.jpg", alt: "2", caption: "The Mentalist", category : ["Crime","Drama","Mystery"] },
  { src: "/src/assets/4_community.jpg", alt: "3", caption: "Community", category : ["Comedy"] },
  { src: "/src/assets/5_extraordinary-you.jpg", alt: "4", caption: "Extraordinary You", category : ["Drama","Romance"] },
  { src: "/src/assets/6_shooting-stars.jpg", alt: "5", caption: "Shooting Stars", category : ["Comedy","Drama","Romance"] },
  { src: "/src/assets/7_Dali-Cocky-Prince.jpg", alt: "6", caption: "Dali And The Cocky Prince", category : ["Drama","Romance"] },
  { src: "/src/assets/8_suspicious-partner.jpg", alt: "7", caption: "Suspicious Partner", category : ["Comedy","Thriller","Romance"] },
  { src: "/src/assets/9_we-bare-bears.jpg", alt: "8", caption: "We Bare Bears", category : ["Comedy","Family", "Cartoons"] },
  { src: "/src/assets/10_totally-spies.jpg", alt: "9", caption: "Totally Spies", category : ["Action","Adventure","Espionage", "Cartoons"] },
  { src: "/src/assets/11_oggy.jpg", alt: "10", caption: "Oggy And The Cockroaches", category : ["Comedy","Children", "Cartoons"] },
  { src: "/src/assets/12_inspector-gadget.jpg", alt: "11", caption: "Inspector Gadget", category : ["Action","Adventure","Children", "Cartoons"]},
]

// TABLEAU D'URLS D'API DES SERIES QUE JE RECUPERE
let apiUrls = [ 
      'https://www.episodate.com/api/show-details?q=chuck',
      'https://www.episodate.com/api/show-details?q=brooklyn-nine-nine',
      'https://www.episodate.com/api/show-details?q=the-mentalist',
      'https://www.episodate.com/api/show-details?q=community',
      'https://www.episodate.com/api/show-details?q=a-day-found-by-chance', //extraordinary you
      'https://www.episodate.com/api/show-details?q=shooting-stars-tvn', //shooting stars
      'https://www.episodate.com/api/show-details?q=dalli-and-gamjatang', //dali and the cocky prince
      'https://www.episodate.com/api/show-details?q=watch-out-for-this-woman', //suspicious partner
      'https://www.episodate.com/api/show-details?q=we-bare-bears',
      'https://www.episodate.com/api/show-details?q=totally-spies',
      'https://www.episodate.com/api/show-details?q=oggy-et-les-cafards',
      'https://www.episodate.com/api/show-details?q=inspector-gadget'
    ];

// FONCTION QUI RECUPERE LES DONNES D'API + STOCKAGE DONNEES LOCALES   
async function mounted() {
      console.log("je charge les données");
      try {
        // const showDetails = [];
        for (const URL of apiUrls) {
          const response = await fetch(URL); // récupère les données de l'url donnée
          const responseData = await response.json(); // transforme les données en format json
  
          if (responseData && responseData.tvShow) { // vérifie si la réponse contient des données et si la série existe
            showDetails.push(responseData.tvShow); // met dans le tableau les données
          } else {
            showDetails.push(null); // si aucune donnée n'est présente, on ajoute un élément null à la fin du tableau
            console.error(`Show details not found for link: ${URL}`);
          }
        }
        // localStorage.setItem('showDetailsData', JSON.stringify(showDetails));
        } catch (error) {
            console.error(error);
        }
};

export { mounted, showDetails, images, apiUrls }