//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi a che posizione della lista il nuovo utente si trova

//creo variabili
var listLabel = document.getElementById("list");
var output = document.getElementById("output");
var cognome, listaCognomi, tempList;

//i cognomi
listaCognomi = [
  "Rossi",
  "Russo",
  "Dinoi",
  "Calò",
  "D'Ambrosio",
  "Mancini",
  "Zaccaria",
  "Andrisano"
];

//cognome utente
cognome = prompt("insierisci il tuo cognome...");

//inserisco cognome utente in lista
listaCognomi.push(cognome);


//metto maiuscola ai cognomi
 for (var i = 0; i < listaCognomi.length; i++){
  listaCognomi[i] = listaCognomi[i].toUpperCase();
} 

//ordino i cognomi
listaCognomi.sort();

//salvo lo stato corrente di listLabel
tempList = listLabel.innerHTML;

for (var i = 0; i < listaCognomi.length; i++){

  //mostro i cognomi come list item
  listLabel.innerHTML = tempList + "<li>" + listaCognomi[i] + "</li>";

  //salvo il nuovo stato di listLabel
  tempList = listLabel.innerHTML;
}

//mostro posizione cognome utente
output.innerHTML = "La posizione del cognome inserito è: " + (listaCognomi.indexOf(cognome.toUpperCase())+ 1);