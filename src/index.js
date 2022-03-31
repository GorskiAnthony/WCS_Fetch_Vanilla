/**
 * Le but de ce livecoding, et de montrer comment je consomme une API en JS Vanilla
 * Tout d'abord, je vais créer une fonction qui va me permettre de récupérer les données de l'API via la méthode fetch
 * Je vais ensuite afficher les données dans mon HTML
 */

// Ici, je déclare une constante API qui est le endpoint de l'API
const API = "https://api.chucknorris.io/jokes/random";

// Je créer une fonction qui va me permettre de récupérer les données de l'API
function getJoke() {
	// J'utilise la méthode fetch pour récupérer les données de l'API
	fetch(API)
		// Je vais ensuite récupérer les données de l'API
		.then((response) => response.json())
		// je console.log() les données récupérées
		.then((data) => {
			console.log(data);
		});
}

// j'appel ma fonction getJoke()
getJoke();
