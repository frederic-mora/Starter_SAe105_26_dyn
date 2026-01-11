// const permet de déclarer une variable en lecture seule. 
// Une variable déclarée avec const ne peut pas être modifiée ultérieurement.
// C'est une façon de "protéger" une variable pour éviter qu'elle soit modifiée par erreur.

// fetch permet de lire le fichier à l'emplacement indiqué.
// cette lecture est une opération qui "prend du temps" (asynchrone).
// await est donc l'instruction utilisée pour dire que l'on attend que l'opération soit terminée.
const templateFile = await fetch("component/Navigation/template.html");

// templateFile.text() pemret de lire et retourner le contenu du fichier sous forme de chaîne de caractères.
// c'est aussi une opération asynchrone, donc on utilise aussi await pour attendre la fin de l'opération.
const template = await templateFile.text();

// A ce stade template contient le contenu du fichier template.html sous forme de chaîne de caractères.

const templateLiFile = await fetch("component/Navigation/templateLi.html");
const templateLi = await templateLiFile.text();

let Navigation = {}; 

/* Recipe.format
   . paramètre data : un objet décrivant un menu de navigation
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template du composant Navigation avec les données fournies
*/
Navigation.format = function(data, css=""){
    let html = template;

    html = html.replace("{{cssClass}}", css );

    html = html.replace("{{title}}", data.title );

    let menuHTML = "";
    for (let menu of data.menus) {
        let li = templateLi;
        li = li.replace("{{name}}", menu.name );
        li = li.replace("{{link}}", menu.link );
        menuHTML += li;
    }
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