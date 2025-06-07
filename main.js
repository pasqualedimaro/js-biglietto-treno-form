
       // genero numeri casuali da 100000 a 999999
    function generaNumeroOrdine() {
    return Math.floor(Math.random() * 900000) + 100000;
    }

    // genero posto a sedere casuale
    function generaPostoSedere() {
    const numero = Math.floor(Math.random() * 20) + 1;
    const lettere = ['A', 'B', 'C', 'D'];
    const lettera = lettere[Math.floor(Math.random() * lettere.length)];
    return numero + lettera;
    }

    // genero carozza casuale  
    function generaCarrozza() {
    return Math.floor(Math.random() * 16) + 1; // da 1 a 16
    }

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
    let sconto = "nessuno";
    
    // Sconti per età
    if (numeroEta < 18) {
        prezzo = prezzo - (prezzo * 20 / 100);
        sconto = 'Sconto minorenni (20%)';
    } else if (numeroEta > 65) {
        prezzo = prezzo - (prezzo * 40 / 100);
        sconto = 'Sconto over 65 (40%)';
    }

     // genero i dati casuali per il biglietto
    const numeroOrdine = generaNumeroOrdine();
    const postoSedere = generaPostoSedere();
    const carrozza = generaCarrozza();                                                                                                     
    
     // Mostro il risultato
    risultatoDiv.innerHTML = 
    `<h2>Il tuo biglietto</h2>
    <p><strong>Passeggero:</strong> ${nome} ${cognome}</p>
    <p><strong>Numero Ordine:</strong> ${numeroOrdine}</p>
    <p><strong>Carrozza:</strong> ${carrozza}</p>
    <p><strong>Posto:</strong> ${postoSedere}</p>
    <p><strong>Sconto applicato:</strong> ${sconto}</p>
    <p><strong>Prezzo finale: €${prezzo.toFixed(2)}</strong></p>`;
});

