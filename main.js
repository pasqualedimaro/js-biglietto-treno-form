

/*const bottone = document.getElementById('bottone');

bottone.addEventListener('click', function() {
    // Prendo gli elementi
    const inputNome = document.getElementById('nome');
    const inputCognome = document.getElementById('cognome');
    const inputKm = document.getElementById('km');
    const inputEta = document.getElementById('eta');
    
    // Leggo i valori
    console.log('Nome:', inputNome.value);
    console.log('Cognome:', inputCognome.value);
    console.log('Km:', inputKm.value);
    console.log('Età:', inputEta.value);
});*/

bottone.addEventListener('click', function() {
    const inputKm = document.getElementById('km');
    const inputEta = document.getElementById('eta');
    
    const km = inputKm.value;
    const eta = inputEta.value;
    
    // Controllo se è vuoto
    if (km == '') {
        console.log('Errore: inserisci i km!');
        return;
    }
    if (eta == '') {
        console.log('Errore: inserisci età!');
        return;
    }
    
    const prezzo = km * 0.21;
    console.log('Prezzo:', prezzo);
});