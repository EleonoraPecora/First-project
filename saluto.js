// crea una funzione che saluta l ' utente dicendo ciao Eleonora
function salutaEleonora() {
    console.log("Ciao Eleonora!");
}   
salutaEleonora();
//crea una funzione che calcola l'età ricevendo l'anno di nascita come parametro e restituendo l'età
function calcolaEtà(annoDiNascita) {
    const annoCorrente = new Date().getFullYear();
    const età = annoCorrente - annoDiNascita;
    return età;
}
const etàDiEleonora = calcolaEtà(1998);
console.log("L'età di Eleonora è: " + etàDiEleonora);

// crea una funziona che controlla se un numero è pari o dispari
function ePari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
    console.log("il numero 4 è pari: " + ePari(4));