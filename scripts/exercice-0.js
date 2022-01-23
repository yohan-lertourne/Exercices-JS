function createCardsExo1() {
    let inBody = document.getElementsByTagName("main")[0];
    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardDescription = document.createElement("section");
    let cardButton = document.createElement("button");
    inBody.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardButton);
    cardTitle.innerText= "Friendship is Magic";
    cardDescription.innerText = "Vous intégrerez une page qui listera les noms des principaux personnages de la série 'Friendship is magic', sous forme de liste non ordonnée. Le texte sera écrit en blanc sous un fond 'arc-en-ciel' (gradient) du rose vers le violet. L'affichage sera ENTIEREMENT géré par le script JS de la page : votre page HTML ne doit contenir aucune information si ce n'est un 'H1'. Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder. ";
    cardButton.innerHTML = "<a href='./Exercices/Exercice 1/index.html'> Voir l'exercice</a>";
}

function createCardsExo2() {
    let inBody = document.getElementsByTagName("main")[0];
    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardDescription = document.createElement("section");
    let cardButton = document.createElement("button");
    inBody.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardButton);
    cardTitle.innerText= "L'Horloge";
    cardDescription.innerText = "Vous créerez une page qui affichera l'heure actuelle sous forme : 'hh:mm:s' au centre de la page. Vous insérerez un minimum de style afin que ce soit au moins agréable à regarder.";
    cardButton.innerHTML = "<a href='./Exercices/Exercice 2/index.html'> Voir l'exercice</a>";
}
function createCardsExo3() {
    let inBody = document.getElementsByTagName("main")[0];
    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardDescription = document.createElement("section");
    let cardButton = document.createElement("button");
    inBody.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardButton);
    cardTitle.innerText= "FizzBuzz";
    cardDescription.innerHTML = "Vous créerez une page qui affichera un champs de texte un compteur allant de 0 à 100. Il affichera : <br>Le nombre en question, <br>Fizz si c'est un multiple de 3, <br>Buzz si c'est un multiple de 5 <br> FizzBuzz si c'est un multiple de 3 et de 5. <br>Tout votre code sera géré exclusivement par des fonctions. ";
    cardButton.innerHTML = "<a href='./Exercices/Exercice 3/index.html'> Voir l'exercice</a>";
}
function createCardsExo4() {
    let inBody = document.getElementsByTagName("main")[0];
    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardDescription = document.createElement("section");
    let cardButton = document.createElement("button");
    inBody.appendChild(card);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardButton);
    cardTitle.innerText= "FizzBuzz++";
    cardDescription.innerHTML = "Vous créerez un nouveau FizzBuzz, sauf que : <br>Une case affichera le chiffre, <br>Fizz, Buzz ou FizzBuzz s'afficheront au dessus du chiffre, en grand <br>Les valeurs s'afficheront une à une, <br> Un boutton next permettra de passer à la valeur suivante <br>Un bouton 'prev' permettra d'afficher la valeur précédente.";
    cardButton.innerHTML = "<a href='./Exercices/Exercice 4/index.html'> Voir l'exercice</a>";
}
createCardsExo1();
createCardsExo2();
createCardsExo3();
createCardsExo4();
