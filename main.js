// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// se v è minore di 18, stampare in console “insufficiente”
// se v è maggiore uguale a 18 e minore di 21, stampare in console “sufficiente”
// se v è maggiore uguale a 21 e minore di 24, stampare in console: “buono”
// se v è maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// se v è maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// se v è uguale a 30, stampare in console: “eccellente”
// Esempio:
// let v = 29;
// Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch.

// ------- IF / ELSE -------

let v = 29;     //Ottimo

if(v < 18 && v > 0){
    console.log('Insufficiente');
}
else if(v >= 18 && v < 21){
    console.log('Sufficiente');
}
else if(v >= 21 && v < 24){
    console.log('Buono');
}
else if(v >= 24 && v < 27){
    console.log('Distinto');
}
else if(v >= 27 && v <= 29){
    console.log('Ottimo');
}
else if(v == 30){
    console.log('Eccellente');
}
else {
    console.log('Voto non valido');
}