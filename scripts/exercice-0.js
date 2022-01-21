function createCards() {
    let inBody = document.getElementsByTagName("body")[0];
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
    cardButton.innerText = "Voir l'exercice";
}

createCards();
