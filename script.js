function AfficheDate(){
var d = new Date();
  //pour affcher le jour en francais
    var jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche"];
    //pour affcher le mois en francais
    var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    var year=d.getFullYear();
    var dayNum=d.getDate();
    var day = jours[d.getDay()];
    var month = mois[d.getMonth()];
    var hours=d.getHours();

  //si il est matin ou apres-midi il affichera bonjour si apres 17heures il afficher bonsoir
    var salut=(hours<17)? "Bonjour, " : "Bonsoir, " ;
    document.getElementById("p1").textContent = salut+"Aujourd'hui c'est le: "+day+" "+dayNum+" "+month+" "+year;

}
function ChangeImage(){
//fonction pour changer d'image de phototèque en bas en cliquant sur l'image
    const IMG=["phototheque/1.jpg", "phototheque/2.png" ,
    "phototheque/3.jpeg", "phototheque/4.jpeg" ,"phototheque/5.png" ,
    "phototheque/6.png" ,"phototheque/7.jpeg", 
    "phototheque/8.jpeg", "phototheque/9.jpeg", "phototheque/10.jpeg" ,
    "phototheque/11.jpeg" ,"phototheque/12.jpeg" ,"phototheque/13.jpeg" ,"phototheque/14.jpeg" ,"phototheque/15.jpeg",
     "phototheque/16.jpeg" ,"phototheque/17.jpeg" ,"phototheque/18.jpeg", "phototheque/19.jpg" ,"phototheque/20.jpg",
      "phototheque/21.jpg","phototheque/22.jpg" ,"phototheque/23.jpg", "phototheque/24.jpeg" ,"phototheque/25.jpeg", 
      "phototheque/26.jpeg","phototheque/27.jpeg", "phototheque/28.jpeg" ,"phototheque/29.jpeg", "phototheque/30.jpg" ]
     
     const i=Math.floor(Math.random()*IMG.length);
    document.getElementById("img").src=IMG[i];
    
 }

