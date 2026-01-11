// Importation du composant Navigation pour pouvoir l'intégrer dans le composant Hero si besoin
import { Navigation } from "../Navigation/index.js";

// Chargement du template HTML du composant Hero
const templateFile = await fetch("component/Hero/template.html");
// lecture du contenu du fichier template.html sous forme de chaîne de caractères
const template = await templateFile.text();

let Hero = {
    navHTML: "" // initialisation de la propriété qui contiendra le HTML de la navigation (si ajoutée)
};

/* Hero.format
   . paramètre data : un objet décrivant les données du Hero
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template du composant Hero avec les données fournies
*/
Hero.format = function(data, css=""){
    let html = template; 
    // Ajout de la classe CSS optionnelle. Si aucune valeur n'est fournie, 
    // css est une chaine vide par défaut donc le tag {{cssClass}} sera juste remplacé par une chaine vide
    html = html.replace("{{cssClass}}", css );
    // Si une navigation a été ajoutée via Hero.addNavigation, on l'insère dans le template.
    // Sinon, on insère une chaine vide (donc on efface le tag {{nav}}) car Hero.navHTML a été initialisée à vide
    html =  html.replace("{{nav}}", Hero.navHTML );
    // remplacement des autres tags (les data du composant Hero)
    html = html.replace("{{title}}", data.title );
    html = html.replace("{{subtitle}}", data.subtitle );
    return html;
}

/* Hero.addNavigation

    IMPORTANT : cette fonction doit être appelée AVANT Hero.render
    pour que la navigation soit intégrée dans le Hero

   . paramètre data : un objet décrivant un menu de navigation
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
   La fonction génère le HTML de la navigation et le stocke dans Hero.navHTML
*/
Hero.addNavigation = function( data, css="" ){
    Hero.navHTML = Navigation.format( data, `hero__nav ${css}`);
}

/* Hero.render
   . paramètre where : un selecteur CSS pour désigner l'élément où ajouter le Hero
   . paramètre data : un objet décrivant les données du Hero
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
*/
Hero.render = function( where, data, css="" ){
    let node = document.querySelector(where);
    node.innerHTML += Hero.format( data, css );
}

export { Hero };