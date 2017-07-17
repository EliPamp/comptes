var nom;
var montant;


function client() {
    nom = prompt("Entrez votre nom");
    montant = Number(prompt("Entrez votre solde"));
    var liElement = document.createElement("li");
    var content = document.createTextNode(nom + " : " + montant + "$");
    liElement.appendChild(content);
    document.getElementById("comptes").appendChild(liElement);

    var buttonElement = document.createElement('button', {"id" : "buttonCrediter"});
    var content = document.createTextNode("Créditer");
    buttonElement.appendChild(content);
    document.getElementById("comptes").appendChild(buttonElement);

    var buttonElement = document.createElement('button', {"id" : "buttonDebiter"});
    var content = document.createTextNode("Débiter");
    buttonElement.appendChild(content);
    document.getElementById("comptes").appendChild(buttonElement);

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








