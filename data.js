// =============================================================
// data.js — les créatures de VOTRE univers
// =============================================================
// TODO : remplissez ce tableau avec au moins 12 créatures
// (Pokémon, Digimon ou Yu-Gi-Oh!), en respectant ce format :
//
// {
//   id: "#001",                                   // "#" suivi de 3 chiffres
//   name: "Exemple",                              // texte
//   type: "Feu",                                  // une valeur d'une liste fixe
//   level: "Base",                                // texte
//   stats: { hp: 45, attack: 49, defence: 49 },   // 3 nombres de 0 à 999
//   image: "https://example.com/001.png",         // lien https vers une image
//   description: "Une courte description."        // 10 à 200 caractères
// }
//
// Pensez à citer la source de vos images dans le README.

const créatures = [
{
  id: "#004",                                  
  name: "Salamèche",                             
  type: "Feu",                                  
  level: "Base",                                
  stats: { hp: 39, attack: 52, defence: 43 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",         
  description: "La flamme sur sa queue montre la force de sa force vitale."       
 },

 {
  id: "#005",                                  
  name: "Reptincel",                             
  type: "Feu",                                  
  level: "Niveau 1",                                
  stats: { hp: 58, attack: 64, defence: 58 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",         
  description: "Quand il balance sa queue brûlante, la température autour de lui monte de plus en plus haut, tourmentant ses adversaires."       
 },

{
  id: "#006",                                  
  name: "Dracaufeu",                             
  type: "Feu",                                 
  level: "Niveau 1",                                
  stats: { hp: 78, attack: 84, defence: 78},  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",         
  description: "Ses ailes peuvent transporter ce Pokémon à une altitude proche de 4 600 pieds. Il souffle le feu à des températures très élevées."       
 },



 {
  id: "#037",                                  
  name: "Goupix",                             
  type: "Feu",                                  
  level: "Base",                                
  stats: { hp: 38, attack: 41, defence: 40},  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png",         
  description: "Si elle est attaquée par un ennemi plus fort que lui, elle feint des blessures pour tromper l’ennemi et s’échappe."       
 },


 {
  id: "#038",                                  
  name: "Feunard",                             
  type: "Feu",                                  
  level: "Niveau 1",                                
  stats: { hp:73, attack: 76, defence:75},  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png",         
  description: "Certaines légendes prétendent que chacun de ses neuf queues a son propre type unique de pouvoir mystique spécial."       
 },




 {
  id: "#058",                                  
  name: "Caninos",                             
  type: "Feu",                                  
  level: "Base",                                
  stats: { hp:55, attack: 70, defence:45},  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png",         
  description: "Il a une nature courageuse et digne de confiance. Il résiste sans crainte à des ennemis plus grands et plus forts."       
 },



 {
  id: "#059",                                  
  name: "Arcanin",                             
  type: "Feu",                                  
  level: "Niveau 1",                                
  stats: { hp: 90, attack: 110, defence: 80 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png",         
  description: "Un ancien rouleau d’images montre que les gens étaient captivés par son mouvement lorsqu’il traversait les prairies."       
 },



 //eau//

{
  id: "#007",                                  
  name: "Carapuce",                             
  type: "Eau",                                  
  level: "Base",                                
  stats: { hp: 44, attack: 48, defence: 65 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",         
  description: "Après la naissance, son dos se gonfle et durcit en une coquille. Il pulvérise une mousse puissante de sa bouche."       
 },

 {
  id: "#008",                                  
  name: "Carabaffe",                             
  type: "Eau",                                  
  level: "Niveau 1",                                
  stats: { hp: 59, attack: 63, defence: 80 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png",         
  description: "La longue queue poilue de Wartortle est un symbole de longévité."       
 },

 {
  id: "#009",                                  
  name: "Tortank",                             
  type: "Eau",                                  
  level: "Niveau 2",                                
  stats: { hp: 79, attack:83, defence: 100 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png",         
  description: "Il écrase son ennemi sous son corps lourd pour provoquer un évanouissement. À la rigueur, il se repliera à l’intérieur de sa coquille."       
 },

 {
  id: "#054",                                  
  name: "Psykokwak",                             
  type: "Eau",                                  
  level: "Base",                                
  stats: { hp: 50, attack:52, defence: 48 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png",         
  description: "Il est constamment torturé par un mal de tête. Lorsque le mal de tête devient intense, il commence à utiliser des pouvoirs mystérieux."       
 },

 {
  id: "#055",                                  
  name: "Akwakwak",                             
  type: "Eau",                                  
  level: "Niveau 1",                                
  stats: { hp: 80, attack: 82, defence: 78 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/055.png",         
  description: "Quand il nage à toute vitesse en utilisant ses longs membres palmés, son front commence d’une certaine manière à briller."       
 },

//éléctrik//

 {
  id: "#025",                                  
  name: "Pikachu",                             
  type: "Electrik",                                  
  level: "base",                                
  stats: { hp: 35, attack: 55, defence: 40 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",         
  description: "Il a de petits sacs électriques sur les deux joues. Lorsqu’il est dans une situation difficile, ce Pokémon décharge de l’électricité."       
 },

  {
  id: "#026",                                  
  name: "Raichu",                             
  type: "Electrik",                                  
  level: "Niveau 1",                                
  stats: { hp: 60, attack: 90, defence: 95 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",         
  description: "Quand son électricité monte, ses muscles sont stimulés et il devient plus agressif que d’habitude."       
 } ,
 
 {
  id: "#100",                                  
  name: "Voltorbe",                             
  type: "Electrik",                                  
  level: "Base",                                
  stats: { hp: 40, attack: 30, defence: 50 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/100.png",         
  description: "Il roule pour se déplacer. Si le sol est inégal, une secousse soudaine due à un choc peut le faire exploser."       
 } ,
 
 {
  id: "#101",                                  
  name: "Électrode",                             
  type: "Electrik",                                  
  level: "Niveau 1",                                
  stats: { hp: 60, attack: 50, defence: 70 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/101.png",         
  description: "Plus il se recharge, plus vite il s’accélère. Mais cela le rend également plus susceptible d’exploser."       
 } ,
 
 {
  id: "#135",                                  
  name: "Akwakwak",                             
  type: "Electrik",                                  
  level: "Base",                                
  stats: { hp: 65, attack: 65, defence:60 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/135.png",         
  description: "Il concentre les faibles charges électriques émises par ses cellules et lance des éclairs vicieux."       
 } ,
 
 {
  id: "#179",                                  
  name: "Wattouat ",                             
  type: "Electrik",                                  
  level: "Base",                                
  stats: { hp: 55, attack: 40, defence: 40 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/179.png",         
  description: "Si de l’électricité statique se forme dans son corps, sa toison double de volume. Le toucher vous choquera."       
 } ,
 {
  id: "#180",                                  
  name: "Lainergie",                             
  type: "Electrik",                                  
  level: "Niveau 1",                                
  stats: { hp: 70, attack: 55, defence: 55 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/180.png",         
  description: "En raison du stockage de trop d’électricité, il a développé des zones où même la laine duveteuse ne pousse pas."       
 } ,
 
 {
  id: "#181",                                  
  name: "Pharamp",                             
  type: "Electrik",                                  
  level: "Niveau 2",                                
  stats: { hp: 90, attack: 75, defence: 85 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/181.png",         
  description: "La lumière vive sur sa queue peut être vue de loin. Elle est prisée depuis l’antiquité comme un phare."       
 },

//plante

{
  id: "#420",                                  
  name: "Ceribou",                             
  type: "plante",                                  
  level: "Base",                                
  stats: { hp: 45, attack: 35, defence: 45 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/420.png",         
  description: "Il se précipite avec agilité pour éviter d’être piqué par des oiseaux Pokémon qui aimeraient s’en aller avec sa petite boule de stockage riche en nutriments."       
 },
 {
  id: "#421",                                  
  name: "Ceriflor",                             
  type: "plante",                                  
  level: "Niveau 1",                                
  stats: { hp: 70, attack: 60, defence:70},  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/421.png",         
  description: "En tant que bourgeon, il bouge à peine. Il reste immobile, attendant patiemment l’apparition de la lumière du soleil."       
 },
 {
  id: "#252",                                  
  name: "Arcko",                             
  type: "plante",                                  
  level: "Base",                                
  stats: { hp: 40, attack: 45, defence: 35 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/252.png",         
  description: "Les petits crochets sur la plante des pieds s’accrochent aux murs et aux plafonds, de sorte qu’il ne tombera jamais même suspendu à l’envers."       
 },
 {
  id: "#253",                                  
  name: "Massko",                             
  type: "plante",                                  
  level: "Niveau 1",                                
  stats: { hp: 50, attack: 65, defence: 45 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/253.png",         
  description: "Ses muscles de la cuisse fortement développés lui donnent une agilité et des performances de saut étonnantes."       
 },
 {
  id: "#285",                                  
  name: "Balignon",                             
  type: "plante",                                  
  level: "Niveau 2",                                
  stats: { hp: 60, attack: 40, defence: 60 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/254.png",         
  description: "Les feuilles qui poussent sur ses bras sont assez tranchantes pour abattre des arbres épais en les découpant proprement. C’est sans égal au combat dans la jungle."       
 },

// glace

 {
  id: "#361",                                  
  name: "Stalgamin",                             
  type: "Glace",                                  
  level: "Base",                                
  stats: { hp: 50, attack: 50, defence: 50 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/361.png",         
  description: " On dit que plusieurs Snorunt se rassemblent sous des feuilles géantes et vivent ensemble en harmonie."       
 },

 {
  id: "#613",                                  
  name: "Polarhume",                             
  type: "Glace",                                  
  level: "Base",                                
  stats: { hp: 55, attack: 70, defence: 40 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/613.png",         
  description: "Beaucoup de ces espèces peuvent être trouvées le long des côtes dans les régions froides. Si un Cubchoo manque de morve pendante, il y a une chance qu’il soit malade."       
 },
 {
  id: "#362",                                  
  name: "Oniglali",                             
  type: "Glace",                                  
  level: "Niveau 1",                                
  stats: { hp: 80, attack: 80, defence: 80 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/362.png",         
  description: "Sa proie est instantanément gelée par l’air froid qu’elle expire de sa bouche énorme. Pendant qu’ils sont dans cet état gelé, il les engloutit. "       
 },
 {
  id: "#378",                                  
  name: "Regice",                             
  type: "Glace",                                  
  level: "Base",                                
  stats: { hp: 80, attack: 50, defence: 100 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/378.png",         
  description: " Avec de l’air froid pouvant atteindre des températures aussi basses que −328 degrés Fahrenheit, Regice gèle instantanément toute créature qui s’en approche."       
 },
 {
  id: "#471",                                  
  name: "Givrali",                             
  type: "Glace",                                  
  level: "Niveau 1",                                
  stats: { hp: 65, attack: 60, defence: 110 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/471.png",         
  description: "Il peut contrôler sa température corporelle à volonté, ce qui lui permet de geler l’humidité dans l’atmosphère et de créer des tourbillons de poussière de d.iamant "       
 },
 {
  id: "#614",                                  
  name: "Polagriffe",                             
  type: "Glace",                                  
  level: "Niveau 1",                                
  stats: { hp: 95, attack: 130, defence: 80 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/614.png",         
  description: "Une fois qu’il capture ses proies, il leur insuffle de l’air froid pour les congeler et les préserver. "       
 },
 {
  id: "#975",                                  
  name: "Balbalèze ",                             
  type: "Glace",                                  
  level: "Niveau 1",                                
  stats: { hp: 170, attack: 113, defence: 65 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/975.png",         
  description: " Il protège son corps avec des muscles puissants et une épaisse couche de graisse sous sa peau."       
 },

 //Ténébres

  {
  id: "#197",                                  
  name: "Noctali ",                             
  type: "Ténébres",                                  
  level: "Niveau 1",                                
  stats: { hp: 95, attack: 65, defence: 110 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/197.png",         
  description: "Lorsqu’il est exposé à l’aura de la lune, les anneaux sur son corps brillent faiblement et il acquiert un pouvoir mystérieux."       
 },

 {
  id: "#261",                                  
  name: "Medhyèna",                             
  type: "Ténébres",                                  
  level: "Base",                                
  stats: { hp: 95, attack: 65, defence: 110 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/261.png",         
  description: "Il montre ses grandes crocs et aboie vigoureusement pour tenter d’intimider les opposants, mais c’est en fait une manifestation de sa nature lâche."       
 },
 {
  id: "#262",                                  
  name: "Grahyèna",                             
  type: "Ténébres",                                  
  level: "Niveau 1",                                
  stats: { hp: 70, attack: 90, defence: 70 },  
  image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/262.png",         
  description: "Ils suivent fidèlement les ordres de leur chef. La proie ciblée par Mightyena n’est jamais autorisée à échapper au travail d’équipe exceptionnel de ses poursuivants."       
 }
 
];
