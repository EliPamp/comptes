var nom;
var montant;


function client() {
    nom = prompt("Entrez votre nom");
    montant = Number(prompt("Entrez votre solde"));
    var liElement = document.createElement('li');
    var content = document.createTextNode(nom + " : " + montant + "$");
    liElement.appendChild(content);
    document.getElementById("comptes").appendChild(liElement);

};


function crediter() {
    var credit = Number(prompt("Entrez le montant à créditer"));
    montant = credit + montant;
    document.getElementById("comptes").innerHTML = nom + " a maintenant " + montant + "$";
        
};

   
function debiter() {
    var debit = Number(prompt("Entrez le montant à débiter"));
    montant = montant - debit;
    document.getElementById("comptes").innerHTML = nom + " a désormais " + montant + "$";

};








