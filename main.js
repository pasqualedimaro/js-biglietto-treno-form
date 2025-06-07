

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
    const km = document.getElementById('km').value;
    const eta = document.getElementById('eta').value;
    
    if (km == '') {
        console.log('Errore: inserisci i km!');
        return;
    }
    if (eta == '') {
        console.log('Errore: inserisci età!');
        return;
    }
    
    // Converto in numeri
    const numeroKm = Number(km);
    const numeroEta = Number(eta);
    
    let prezzo = numeroKm * 0.21;
    
    // Sconti per età
    if (numeroEta < 18) {
        prezzo = prezzo - (prezzo * 20 / 100);
        console.log('Sconto minorenni applicato');
    } else if (numeroEta > 65) {
        prezzo = prezzo - (prezzo * 40 / 100);
        console.log('Sconto over 65 applicato');
    }
    
    console.log('Prezzo finale:', prezzo);
});