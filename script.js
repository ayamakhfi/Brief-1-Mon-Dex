// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 2. DÉTAIL
// Un clic sur une carte ouvre le panneau de détail :
// image, description, et statistiques affichées en barres.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------

               //la validation 
const form = document.getElementById("creature-form");

              // validation de id
const inputId = form.querySelector('[name="id"]');
const messageErreurId= inputId.parentElement.querySelector(".error-message");

 const regexId= /^#\d{3}$/;

inputId.addEventListener("input",function(){
   

    const valeur= inputId.value.trim();

    inputId.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
    messageErreurId.classList.remove("text-red-500","text-green-500");

    if (valeur===""){
        messageErreurId.textContent="";
    }
    else if(!regexId.test(valeur)){
        inputId.classList.add("border-red-500");
        inputId.classList.add("text-red-500");
       messageErreurId.textContent="Format invalide:exemple #001";
       messageErreurId.classList.add("text-red-500");
        

    }

    else{
        inputId.classList.add("border-green-500");
        inputId.classList.add("text-green-500");
        messageErreurId.textContent="Nomber valid";
       messageErreurId.classList.add("text-green-500");
       
    }
});

           // validation de nom

const inputNom=form.querySelector('[name="name"]');
const messageErreurNom= inputNom.parentElement.querySelector(".error-message")
const regexNom=/^[a-z]+(?:-[a-z]+)*$/;

 inputNom.addEventListener("input",function(){
    const mot=inputNom.value.toLowerCase();

     inputNom.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurNom.classList.remove("text-red-500","text-green-500");

    if(mot===""){
        messageErreurNom.textContent="";
    }
    else if (!regexNom.test(mot)){
        inputNom.classList.add("text-red-500");
        inputNom.classList.add("border-red-500");
        messageErreurNom.textContent="Nom invalide:exemple Pikachu,Pika-chu";
        messageErreurNom.classList.add("text-red-500");
        
    }

    else{
        inputNom.classList.add("text-green-500");
        inputNom.classList.add("border-green-500");
        messageErreurNom.textContent="Nom valide";
        messageErreurNom.classList.add("text-green-500");
    }
 });


 const inputNiveau=form.querySelector('[name="level"]');
 const messageErreurNiveau=inputNiveau.parentElement.querySelector(".error-message");
    const regexNiveau=/^(Base|Niveau([1-9]|[1-9]\d|100))$/i;

  
  inputNiveau.addEventListener("input",function(){
     const niveau=inputNiveau.value.trim();

     inputNiveau.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurNiveau.classList.remove("text-red-500","text-green-500");

     if(niveau ===""){
       messageErreurNiveau.textContent="";}

    else if(!regexNiveau.test(niveau)){
        inputNiveau.classList.add("border-red-500");
        inputNiveau.classList.add("text-red-500");
        messageErreurNiveau.textContent="invalid Niveau. exemple:Niveau1";
       messageErreurNiveau.classList.add("text-red-500");
    }

     else{
        inputNiveau.classList.add("border-green-500");
        inputNiveau.classList.add("text-green-500");
        messageErreurNiveau.textContent="valid Niveau.";
       messageErreurNiveau.classList.add("text-green-500");
    }
 });

          // validation de statistique

 const inputStatic=form.querySelectorAll('[name="stat1"],[name="stat2"],[name="stat3"]');
 inputStatic.forEach(function(input){
  const messageErreurStatic= input.parentElement.querySelector(".error-message");
  const regexStatic=/^(0|[1-9]\d{0,2})$/;

  
  input.addEventListener("input",function(){
     const static=input.value;

     input.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurStatic.classList.remove("text-red-500","text-green-500");

     if(static ===""){
       messageErreurStatic.textContent="";}

    else if(!regexStatic.test(static)){
        input.classList.add("border-red-500");
        input.classList.add("text-red-500");
        messageErreurStatic.textContent="invalid . exemple:1";
       messageErreurStatic.classList.add("text-red-500");
    }

     else{
        input.classList.add("border-green-500");
        input.classList.add("text-green-500");
       messageErreurStatic.textContent="valid .";
       messageErreurStatic.classList.add("text-green-500");
    }});
 });

//  validation de l image

const inputImg=form.querySelector('[name="image"]');
const messageErreurImg=inputImg.parentElement.querySelector(".error-message");
const regexImg=/^https?:\/\/.+\.png$/i;

inputImg.addEventListener("input",function(){
    const img=inputImg.value.trim();

 inputImg.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurImg.classList.remove("text-red-500","text-green-500");

     if(img ===""){
       messageErreurImg.textContent="";}

    else if(!regexImg.test(img)){
       inputImg.classList.add("border-red-500");
        inputImg.classList.add("text-red-500");
        messageErreurImg.textContent="invalid image. exemple:https://site.com/image.png";
        messageErreurImg.classList.add("text-red-500");
    }

     else{
        inputImg.classList.add("border-green-500");
        inputImg.classList.add("text-green-500");
        messageErreurImg.textContent="valid image.";
        messageErreurImg.classList.add("text-green-500");
    }
 });

