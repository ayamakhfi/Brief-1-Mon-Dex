// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.

const grid=document.getElementById("grid");
 function affichercartes(liste){
   grid.innerHTML="";
   liste.forEach((créature)=>{
      const totale= créature.stats.hp+créature.stats.attack+créature.stats.defence;

      const carte= document.createElement("article");
      carte.className='flex flex-col gap-3 rounded-card bg-white p-3 pb-4  hover:-translate-y-3 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-300';

      carte.innerHTML=` <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
                      <span class="absolute left-3 top-2 font-mono text-sm text-muted">${créature.id}</span>
                      <img src="${créature.image}"  alt="${créature.name}"> 
                      </div>

                       <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${créature.name}</h3>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${créature.type}</span>
          </div>
          <p class="text-sm text-muted">${créature.level} · Total ${totale}</p>
          <button type="button" class="btn-outline border-[#C60000] text-[#C60000] 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-black">Ajouter à l'équipe</button>`;

          carte.addEventListener("click",()=>{
            panneaudétail(créature);
          });
           grid.appendChild(carte);
      });
   }

   affichercartes(créatures);
 


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

function panneaudétail(créature){

   document. getElementById("detail").classList.remove("hidden");
   document.getElementById("détail-id").textContent=`${créature.id}.Détail`;
   document.getElementById("détail-img").src=créature.image;
   document.getElementById("détail-img").alt=créature.name;
   document.getElementById("détail-name").textContent=créature.name;
   document.getElementById("détail-type").textContent=créature.type;
   document.getElementById("détail-descreption").textContent=créature.description;

   const stats=[
      { nom:"hp", valeur:créature.stats.hp},
      {nom:"attack",valeur:créature.stats.attack},
      {nom:"defence", valeur:créature.stats.defence}
   ];

   stats.forEach((stat)=>{
      document.getElementById(`détail-${stat.nom}`).textContent=stat.valeur;

      document.getElementById(`level-${stat.nom}`).style.width=`${Math.min(stat.valeur,100)}%`;
   });
   

   }

   





// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
// -------------------------------------------------------------
 function recherchecréature(créature){
  
   const recherche=document.getElementById("search");
   recherche.addEventListener("input",()=>{
      const text=recherche.value.toLowerCase();
      const Result=[];
      for(let i=0;i<créatures.length;i++){

     const nom=créatures[i].name.toLocaleLowerCase();
      if(text=== nom){
       Result.push(créatures[i]);
      }} affichercartes(Result);
   });
 }
 recherchecréature();

// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------

 function filtre(créatures){
const filter=document.getElementById(id="filters")
const buttons= filter.querySelectorAll(".chip");
buttons.forEach(button=>{

button.addEventListener("click",()=>{
   
     const result=[];
     const filtretype= button.textContent;
   
   for(let i=0;i<créatures.length;i++){

        if( filtretype===créatures[i].type){
         result.push(créatures[i]);
      }} 

      if(filtretype==="Tous"){
       console.log(affichercartes(créatures));}
      else{console.log(affichercartes(result));}

    });
});
}
   
 filtre(créatures);

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
const regexNom=/^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;

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
  const regexStatic=/^\d{1,3}$/;

  
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
const regexImg=/^https:\/\/\S+\.(png|jpe?g|webp|gif)$/i;

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

 const inputMessage =form.querySelector('[name="description"]');
 const messageErreurMessage=inputMessage.parentElement.querySelector(".error-message");
 const regexMessage=/^[\s\S]{10,200}$/;

 inputMessage.addEventListener("input",function(){
   const message=inputMessage.value.trim();
inputMessage.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurMessage.classList.remove("text-red-500","text-green-500");

   if(message===""){
      messageErreurMessage.textContent="";
   }

   else if(!regexMessage.test(message)){
      inputMessage.classList.add("text-red-500");
      inputMessage.classList.add("border-red-500");
      messageErreurMessage.textContent="message invalid";
      messageErreurMessage.classList.add("text-red-500");
   }

    else {
      inputMessage.classList.add("text-green-500");
      inputMessage.classList.add("border-green-500");
      messageErreurMessage.textContent="message valid";
      messageErreurMessage.classList.add("text-green-500");
   }
 });

 form.addEventListener('submit',(e)=>{
   e.preventDefault();

 });


