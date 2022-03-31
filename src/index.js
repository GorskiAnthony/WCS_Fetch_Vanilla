/**
 * Le but de ce livecoding, et de montrer comment je consomme une API en JS Vanilla
 * Tout d'abord, je vais créer une fonction qui va me permettre de récupérer les données de l'API via la méthode fetch
 * Je vais ensuite afficher les données dans mon HTML
 */

// Ici, je déclare une constante API qui est le endpoint de l'API
const API = "https://api.chucknorris.io/jokes/random";
const RENDER = document.querySelector(".render");

// Je créer une fonction qui va me permettre de récupérer les données de l'API
function getJoke() {
	// J'utilise la méthode fetch pour récupérer les données de l'API
	fetch(API)
		// Je vais ensuite récupérer les données de l'API
		.then((response) => response.json())
		// je console.log() les données récupérées
		.then((data) => {
			console.log(data);
			// Je vais ensuite afficher les données dans mon HTML
			// grâce à la fonction render()
			render(data.value);
		});
}

// La fonction render à pour but d'afficher les données dans mon HTML
// Elle prend en charge 1 paramètre, qui est le texte à afficher
function render(quote) {
	const html = `<span class="quote">${quote}</span>`;
	RENDER.innerHTML = html;
}

// j'appel ma fonction getJoke()
getJoke();
