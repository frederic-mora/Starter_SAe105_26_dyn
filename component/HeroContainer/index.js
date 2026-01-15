// Importation du composant Hero pour pouvoir l'intégrer dans le composant si besoin
import { Hero } from "../Hero/index.js";

// Chargement du template HTML du composant HeroContainer
const templateFile = await fetch("component/HeroContainer/template.html");
// lecture du contenu du fichier template.html sous forme de chaîne de caractères
const template = await templateFile.text();

let HeroContainer = {
    cardsHTML: "" // initialisation de la propriété qui contiendra le HTML des cards (si ajoutées)
};

/* HeroContainer.format
   . paramètre data : il n'y en a pas pour ce composant
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template du composant HeroContainer avec les données fournies
*/
HeroContainer.format = function(css=""){
    let html = template; 
    // Ajout de la classe CSS optionnelle. Si aucune valeur n'est fournie, 
    // css est une chaine vide par défaut donc le tag {{cssClass}} sera juste remplacé par une chaine vide
    html = html.replace("{{cssClass}}", css );
    // Si des cards ont été ajoutées via HeroContainer.addCards, on les insère dans le template.
    // Sinon, on insère une chaine vide (donc on efface le tag {{cards}}) car HeroContainer.cardsHTML a été initialisée à vide
    html =  html.replace("{{cards}}", HeroContainer.cardsHTML );
    return html;
}

/* HeroContainer.addCard

    IMPORTANT : cette fonction doit être appelée AVANT HeroContainer.render
    pour voir les cards intégrées dans le HeroContainer

   . paramètre data : un objet décrivant une card Hero
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
   La fonction génère le HTML des cards et les stocke dans HeroContainer.cardsHTML
*/
HeroContainer.addCard = function( data, css="" ){
    HeroContainer.cardsHTML += Hero.format( data, css );
}

/* HeroContainer.render
   . paramètre where : un selecteur CSS pour désigner l'élément où ajouter le HeroContainer
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
*/
HeroContainer.render = function(where, css="" ){
    let node = document.querySelector(where);
    node.innerHTML += HeroContainer.format( css );
}

export { HeroContainer };