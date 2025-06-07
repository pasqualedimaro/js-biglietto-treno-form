
    const form = document.getElementById('form-biglietto');

    form.addEventListener('submit', function() {
    // ipedisco al form di ricaricare la pagina
    event.preventDefault();
    console.log('Form inviato!');
    
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