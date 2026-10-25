# Mon Dex — dépôt de départ

Sprint 2 — Brief 1. Une page Tailwind **statique** à rendre interactive avec JavaScript, pour l'univers de votre choix : Pokémon, Digimon ou Yu-Gi-Oh!.

Lisez le brief complet avant de commencer.

## Installation

Prérequis : [Node.js](https://nodejs.org) (version 18 ou plus).

```bash
npm install
npm run dev
```

`npm run dev` surveille vos fichiers et régénère `dist/output.css` à chaque modification. Ouvrez ensuite `index.html` dans votre navigateur (ou avec l'extension Live Server).

Avant de mettre en ligne sur GitHub Pages :

```bash
npm run build
```

Puis committez `dist/output.css` : GitHub Pages ne lance pas Tailwind pour vous.

## Contenu du dépôt

| Fichier | Rôle |
| --- | --- |
| `index.html` | La page Dex, statique, avec 6 cartes écrites à la main |
| `tailwind.config.js` | Le thème neutre à remplacer par celui de votre univers |
| `src/input.css` | Les directives Tailwind et quelques classes de composants |
| `dist/output.css` | Le CSS généré par Tailwind (ne pas modifier à la main) |
| `data.js` | Le tableau `creatures`, à remplir avec au moins 12 créatures |
| `script.js` | Votre JavaScript, avec la liste des fonctionnalités à coder |
| `design/` | La maquette de la version finale |

## À compléter par vous

- **Univers choisi :** [Pokémon / Digimon / Yu-Gi-Oh!]
- **Lien GitHub Pages :** [lien]
- **Sources des images :** [liens]
- **Tests des expressions régulières :** [collez ici vos tests console : 2 valeurs valides et 2 invalides par expression]
- **Bonus réalisés :** [liste] 

## Source 
[https://www.pokebip.com/] (tout les information de créatures)
[https://www.pokemon.com/us] (les images et les descriptions)


## La validation du formulaire de création:
- Numéro:
Exemples de valeurs valides/invalides:
regexId= /^#\d{3}$/;
  //ID
  console.log("Id",regexId.test("#100")); //true
 console.log("Id",regexId.test("#999")); //true
 console.log("Id",regexId.test("100"));   //false
 console.log("Id",regexId.test("#1000"));//false

- NOM:
regexNom=/^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;
Exemples de valeurs valides/invalides:
//NOM
 console.log("nom",regexNom.test("Pikachu")); //true
 console.log("nom",regexNom.test("Dracaufeu 2"));//true
 console.log("nom",regexNom.test("Méga(y)"));//false
 console.log("nom",regexNom.test("@Méga-Raichu Y"));//false

 - Niveau:
  regexNiveau=/^(Base|Niveau([1-9]|[1-9]\d|100))$/i;
 Exemples de valeurs valides/invalides:
 //NIVEAU
  console.log("Niveau",regexNiveau.test("base")); //true
 console.log("Niveau",regexNiveau.test("Niveau100"));//true
 console.log("Niveau",regexNiveau.test("0"));//false
 console.log("Niveau",regexNiveau.test("Niveau0"));//false

 - STATISTIQUE:
 regexStatic=/^\d{1,3}$/;
 Exemples de valeurs valides/invalides:
//STATISTIQUE
 console.log("Statistique",regexStatic.test("0")); //true
 console.log("Statistique",regexStatic.test("999"));//true
 console.log("Statistique",regexStatic.test("pv55"));//false
 console.log("Statistique",regexStatic.test("1000"));//false

 - lien d'image:
 regexImg=/^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;
 Exemples de valeurs valides/invalides:
   //IMAGE
 console.log("Image",regexImg.test("https://site.com/image.png")); //true
 console.log("Image",regexImg.test("https://site.com/photo.jpg"));//true
 console.log("Image",regexImg.test("image.png"));//false
 console.log("Image",regexImg.test("https://site.com/image.pdf"));//false

 - Description:
 regexMessage=/^[\s\S]{10,200}$/;
 Exemples de valeurs valides/invalides:
 //MESSAGE
  console.log("Description",regexMessage.test("Un Pokémon très puissant")); //true
 console.log("Description",regexMessage.test("Créature de type feu."));//true
 console.log("Description",regexMessage.test("hello"));//false
 console.log("Description",regexMessage.test(""));//false