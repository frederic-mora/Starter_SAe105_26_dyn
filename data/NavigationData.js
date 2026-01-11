/*
    Fichier : data/navigationData.js
    Rôle : contient des données d'exemple pour le composant Navigation
    
    NavigationData est un tableau d'objets.
    Chaque objet contient les propriétés title et menus utilisées pour remplir le template du composant Navigation.
    La propriété menus est un tableau d'objets, chaque objet contenant les propriétés name et link utilisées pour remplir les éléments de menu dans le template du composant Navigation.
    
    Donc en l'état actuel, NavigationData contient 4 ensembles de données différents pour le composant Navigation.
*/
let NavigationData = [
    {
        title: "StartUp",
        menus: [
            { name: "Hero", link: "#hero" },
            { name: "Features", link: "#features" },
            { name: "Pricing", link: "#pricing" }
        ]
    },
    {
        title: "TechCorp",
        menus: [
            { name: "Dashboard", link: "#dashboard" },
            { name: "Projects", link: "#projects" },
            { name: "Teams", link: "#teams" },
            { name: "Settings", link: "#settings" }
        ]
    },
    {
        title: "CreativeLabs",
        menus: [
            { name: "Portfolio", link: "#portfolio" },
            { name: "Blog", link: "#blog" },
            { name: "Careers", link: "#careers" },
            { name: "Contact Us", link: "#contactus" },
            { name: "Support", link: "#support" }
        ]
    },
    {
        title: "EduWorld",
        menus: [
            { name: "Courses", link: "#courses" },
            { name: "Instructors", link: "#instructors" },
            { name: "Events", link: "#events" },
            { name: "Alumni", link: "#alumni" },
            { name: "Donate", link: "#donate" },
            { name: "Blog", link: "#blog" }
        ]
    }
]

export { NavigationData };