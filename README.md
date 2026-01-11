# SAé1.05 Starter Project HTML/CSS/

## Arborescence du projet - Phase 1 HTML/CSS.

- `/assets`
  répertoire contenant toutes les ressources utiles comme les images par exemple

- `/component`
  répertoire contenant tous les composants (un répertoire par composant)

- `/component/Hero`
  répertoire du composant Hero. Contient pour l'instant qu'un seul fichier :
  . style.css : le css spécifique au composant Hero

- `/css`
  répertoire qui contient le css global à l'application (css commun au site et aux composants)

- `index.html`
  page principale

## PRINCIPE GENERAL POUR AJOUTER UN AUTRE COMPOSANT

Exemple d'ajout d'un composant **Navigation** :

1. dupliquez le répertoire `/component/Hero` et renommez le en par exemple `/component/Navigation`

2. éditez et modifiez les fichiers `style.css`.

3. éditez le fichier `/css/global.css` pour y importer le css propre au composant Navigation.
   Dans notre exemple, cela reviendrait à ajouter l'instruction `@import '../component/Navigation/style.css';` dans `/css/global.css`

4. Dans `/index.html`, ajoutez le code html du composant Navigation.

> La procédure est valable pour n'importe quel composant !

> Remarque : Utilisation de variables CSS personnalisées pour spécifier l'URL d'une image et l'appliquer à la propriété background-image (CSS).

## POINTS de VIGILANCE

1. Structure projet - lisibilité du code - convention de nommage
2. Code valide W3C
3. Balises sémantiques
4. utilisation et appropriation du reset
5. Utilisation de variables CSS personnalisées
6. Sélecteurs CSS - méthodologie BEM
7. Ordre des propriétés CSS
8. Choix des unités
9. Media queries - design responsive
10. Utilisation des propriétés personnalisées pour customiser vos composants
11. Composants complexes ou composants imbriqués
12. Bon usage des propriétés CSS : positionnement, flexbox...
