

const bottone = document.getElementById('bottone');

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
});