 // Chargement du template HTML du composant Navigation
const templateFile = await fetch("component/Navigation/template.html");
// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
const template = await templateFile.text();

// Chargement du template HTML pour un élément de menu (un <li>) 
// C'est pour gérer la partie variable du menu de navigation (le nombre d'éléments de menu peut varier)
// (C'est la même chose que les ingrédients du composant Recipe vu en cours)
const templateLiFile = await fetch("component/Navigation/templateLi.html");
// lecture du contenu du fichier templateLi.html sous forme de chaîne de caractères
const templateLi = await templateLiFile.text();

let Navigation = {}; 

/* Recipe.format
   . paramètre data : un objet décrivant un menu de navigation
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template du composant Navigation avec les données fournies
*/
Navigation.format = function(data, css=""){
    let html = template;
    // Ajout de la classe CSS optionnelle. Si aucune valeur n'est fournie, 
    // css est une chaine vide par défaut donc le tag {{cssClass}} sera juste remplacé par une chaine vide
    html = html.replace("{{cssClass}}", css );

    // remplacement du titre du menu
    html = html.replace("{{title}}", data.title );

    // génération des éléments de menu (les <li>) à partir du templateLi et des données fournies
    let menuHTML = "";
    for (let menu of data.menus) {
        let li = templateLi;
        li = li.replace("{{name}}", menu.name );
        li = li.replace("{{link}}", menu.link );
        menuHTML += li;
    }
    // insertion des éléments de menu générés dans le template principal
    html = html.replace("{{menuItems}}", menuHTML );
    return html;
}


/* Recipe.render
   . paramètre where : un selecteur CSS pour désigner l'élément où ajouter la Navigatio
   . paramètre data : un objet décrivant un menu de navigation
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
*/
Navigation.render = function( where, data, css="" ){
    let node = document.querySelector(where);
    node.innerHTML += Navigation.format( data, css );
}

export { Navigation };