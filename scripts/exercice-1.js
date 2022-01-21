function listPoney() {
    let inBody = document.getElementsByTagName("body")[0];
    let listeContainer = document.createElement("ul");
    let names = ["Pinkie Pie", "Rainbow Dash", "Apple Juice", "Twilight Sparkle", "Rarity", "Fluttershy"]
    for (i=0; i< names.length;i++) {
        let listeElements = document.createElement("li");
        listeElements.innerText = names[i];
        listeContainer.appendChild(listeElements);
    }
    inBody.appendChild(listeContainer);
}

listPoney();