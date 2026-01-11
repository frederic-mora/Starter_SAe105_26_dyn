import { Navigation } from "../Navigation/index.js";

const templateFile = await fetch("component/Hero/template.html");
const template = await templateFile.text();

let Hero = {
    navHTML: "" // initialisation de la propriété qui contiendra le HTML de la navigation (si ajoutée)
};

/* Hero.format
   . paramètre data : un objet décrivant les données du Hero
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template du composant Hero avec les données fournies
*/
Hero.format = function(data, css){
    let html = template; 
    html = html.replace("{{cssClass}}", css );
    html =  html.replace("{{nav}}", Hero.navHTML );
    html = html.replace("{{title}}", data.title );
    html = html.replace("{{subtitle}}", data.subtitle );
    return html;
}

/* Hero.addNavigation
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
Hero.render = function( where, data, css ){
    let node = document.querySelector(where);
    node.innerHTML += Hero.format( data, css );
}

export { Hero };