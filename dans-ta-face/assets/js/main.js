



// Initialisation du compteur à partir de localStorage ou à 0 si non défini
let compteur = localStorage.getItem('compteur') ? parseInt(localStorage.getItem('compteur')) : 0;

// Mise à jour de l'affichage du compteur
document.getElementById('compteur').textContent = compteur;
document.getElementById('jours-arret').value = compteur;

// Afficher la date du jour
let dateDuJour = new Date();
document.getElementById('date-du-jour').value = dateDuJour.toISOString().substring(0, 10);

// Afficher la date de début d'arrêt
let dateDebut = localStorage.getItem('date-debut') ? localStorage.getItem('date-debut') : null;
if (dateDebut) {
    document.getElementById('date-debut').value




















