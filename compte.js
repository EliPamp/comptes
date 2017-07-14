var nom;
var montant;


function client() {
    nom = prompt("Entrez votre nom");
    montant = Number(prompt("Entrez votre solde"));
    for(var i = 0; i < 5; i++){
    document.getElementById("compte"+ i).innerHTML = nom + " : " + montant + "$";}

};


function crediter() {
    var credit = Number(prompt("Entrez le montant à créditer"));
    montant = credit + montant;
    document.getElementById("compte1").innerHTML = nom + " a maintenant " + montant + "$";
        
};

   
function debiter() {
    var debit = Number(prompt("Entrez le montant à débiter"));
    montant = montant - debit;
    document.getElementById("compte2").innerHTML = nom + " a désormais " + montant + "$";

};








