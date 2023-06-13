






// app.js
    // Initialisation du compteur à partir de localStorage ou à 0 si non défini
    let compteur = localStorage.getItem('compteur') ? parseInt(localStorage.getItem('compteur')) : 0;

    // Mise à jour de l'affichage du compteur
    document.getElementById('compteur').textContent = compteur;

    document.getElementById('monBouton').addEventListener('click', function() {
        // Obtenir la date/heure actuelle et la dernière date/heure de clic
        let maintenant = new Date();
        let dernierClic = new Date(localStorage.getItem('dernierClic'));

        // Vérifier si 24 heures se sont écoulées depuis le dernier clic
        if (!dernierClic || maintenant - dernierClic >= 24 * 60 * 60 * 1000) {
            // Si c'est le cas, incrémenter le compteur et sauvegarder la nouvelle date/heure du clic
            compteur++;
            localStorage.setItem('compteur', compteur);
            localStorage.setItem('dernierClic', maintenant.toString());

            // Mise à jour de l'affichage du compteur
            document.getElementById('compteur').textContent = compteur;
        } else {
            alert("Vous ne pouvez cliquer qu'une fois toutes les 24 heures");
        }
    });

    document.getElementById('monBoutonReset').addEventListener('click', function() {
        // Réinitialiser le compteur
        compteur = 0;
        localStorage.setItem('compteur', compteur);
    
        // Réinitialiser la date du dernier clic
        localStorage.removeItem('dernierClic');
    
        // Réinitialiser la date de début
        localStorage.removeItem('date-debut');
    
        // Mise à jour de l'affichage du compteur
        document.getElementById('compteur').textContent = compteur;
        document.getElementById('jours-arret').textContent = compteur;
        document.getElementById('jours-arret').value = compteur;

    
        // Réinitialiser l'affichage de la date de début
        document.getElementById('date-debut').value = "";
    
        // Afficher un message de confirmation
        alert("Le compteur a été réinitialisé");
    });
    









    // document.getElementById('monBouton').addEventListener('click', function() {
    //     // Obtenir la date/heure actuelle et la dernière date/heure de clic
    //     let maintenant = new Date();
    //     let dernierClic = new Date(localStorage.getItem('dernierClic'));
    
    //     // Vérifier si 24 heures se sont écoulées depuis le dernier clic
    //     if (!dernierClic || maintenant - dernierClic >= 24 * 60 * 60 * 1000) {
    //         // Si c'est le cas, incrémenter le compteur et sauvegarder la nouvelle date/heure du clic
    //         compteur++;
    //         localStorage.setItem('compteur', compteur);
    //         localStorage.setItem('dernierClic', maintenant.toString());
    
    //         // Si la date de début n'est pas encore définie, définissez-la sur aujourd'hui
    //         if (!localStorage.getItem('date-debut')) {
    //             localStorage.setItem('date-debut', maintenant.toISOString().substring(0, 10));
    //             document.getElementById('date-debut').value = maintenant.toISOString().substring(0, 10);
    //         }
    
    //         // Mise à jour de l'affichage du compteur
    //         document.getElementById('compteur').textContent = compteur;
    
    //         // Incrémenter et mettre à jour l'affichage des jours d'arrêt
    //         document.getElementById('jours-arret').value = compteur;
    //     } else {
    //         alert("Vous ne pouvez cliquer qu'une fois toutes les 24 heures");
    //     }
    // });
    













