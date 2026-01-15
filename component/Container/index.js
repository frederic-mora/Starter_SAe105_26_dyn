// Chargement du template HTML du composant Container
const templateFile = await fetch("component/Container/template.html");
// lecture du contenu du fichier template.html sous forme de chaîne de caractères
const template = await templateFile.text();

let Container = {
    contentHTML: "" // initialisation de la propriété qui contiendra le HTML des cards (si ajoutées)
};

/* Container.format
   . paramètre data : il n'y en a pas pour ce composant
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > valeur de retour : une chaine correspondant au contenu HTML formaté du template du composant Container avec les données fournies
*/
Container.format = function(css=""){
    let html = template; 
    // Ajout de la classe CSS optionnelle. Si aucune valeur n'est fournie, 
    // css est une chaine vide par défaut donc le tag {{cssClass}} sera juste remplacé par une chaine vide
    html = html.replace("{{cssClass}}", css );
    // Si des cards ont été ajoutées via Container.addContent, on les insère dans le template.
    // Sinon, on insère une chaine vide (donc on efface le tag {{content}}) car Container.contentHTML a été initialisée à vide
    html =  html.replace("{{content}}", Container.contentHTML );
    return html;
}

/* Container.addContent

    IMPORTANT : cette fonction doit être appelée AVANT Container.render
    pour voir les cards intégrées dans le Container

   . paramètre component : un composant  
   . paramètre data : un objet décrivant les données du composant
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
   La fonction génère le HTML des cards et les stocke dans Container.contentHTML
*/
Container.addContent = function( component, data, css="" ){
    Container.contentHTML += component.format( data, css );
}

/* Container.clearContent
    > aucune valeur de retour
    La fonction vide le contenu HTML stocké dans Container.contentHTML
*/
Container.clearContent = function(){
    Container.contentHTML = "";
}   

/* Container.render
   . paramètre where : un selecteur CSS pour désigner l'élément où ajouter le Container
   . paramètre css : une chaine de caractères correspondant à une (ou plusieurs) classe CSS optionnelle à ajouter au composant
   > aucune valeur de retour   
*/
Container.render = function(where, css="" ){
    let node = document.querySelector(where);
    node.innerHTML += Container.format( css );
}

export { Container };