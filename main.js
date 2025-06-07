
    const form = document.getElementById('form-biglietto');

    form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const km = document.getElementById('km').value;
    const eta = document.getElementById('eta').value;
    const risultatoDiv = document.getElementById('risultato');
    
    if (nome == '') {
        risultatoDiv.innerHTML = '<p>Errore: inserisci il nome!</p>';
        return;
    }
    if (cognome == '') {
        risultatoDiv.innerHTML = '<p>Errore: inserisci il cognome!</p>';
        return;
    }
    if (km == '') {
        risultatoDiv.innerHTML = '<p>Errore: inserisci i km!</p>';
        return;
    }
    if (eta == '') {
        risultatoDiv.innerHTML = '<p>Errore: inserisci età!</p>';
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
    
     // Mostro il risultato
    risultatoDiv.innerHTML = 
    `<h2>Il tuo biglietto:</h2>
    <p>Passeggero: ${nome} ${cognome}</p>
    <p>Sconto applicato: ${sconto}</p>
    <p><strong>Prezzo finale: €${prezzo.toFixed(2)}</strong></p>`;
    
});

