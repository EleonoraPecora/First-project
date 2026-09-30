// crea una funzione che saluta l ' utente dicendo ciao Eleonora
function salutaEleonora() {
    console.log("Ciao Eleonora!");
}   
salutaEleonora();
// crea una funziona che controlla se un numero è pari o dispari
function ePari(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
    console.log("il numero 4 è pari: " + ePari(4));
    // crea una funzione che calcola l'età precisa ricevendo la data di nascita (YYYY-MM-DD)
function calcolaEtà(dataDiNascita) {
    const oggi = new Date();
    const nascita = new Date(dataDiNascita);
    
    let età = oggi.getFullYear() - nascita.getFullYear();
    const differenzaMesi = oggi.getMonth() - nascita.getMonth();
    
    // Se non ha ancora compiuto gli anni quest'anno, sottrai 1 dall'età
    if (differenzaMesi < 0 || (differenzaMesi === 0 && oggi.getDate() < nascita.getDate())) {
        età--;
    }
    
    return età;
}
const etàPrecisaDiEleonora = calcolaEtà("1998-05-15");
console.log("L'età precisa di Eleonora è: " + etàPrecisaDiEleonora);