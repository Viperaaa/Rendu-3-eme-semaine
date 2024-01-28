
document.addEventListener('DOMContentLoaded', function () {
    console.log('Le DOM est chargé.');

    let body = document.body;
    let darkModeToggle = document.querySelector('.dark-mode-toggle');

    if (darkModeToggle) {
        console.log('Bouton "Activer le mode sombre" trouvé.');
        
        darkModeToggle.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            console.log('Mode sombre activé/désactivé.');
        });
    } else {
        console.error('Le bouton "Activer le mode sombre" ne peut pas marcher.');
    }

    let form = document.querySelector('form');
    
    if (form) {
        console.log('Formulaire trouvé.');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password');

            console.log('Valeurs du formulaire:');
            console.log('Nom d\'utilisateur:', username);
            console.log('Email:', email);
            console.log('Mot de passe:', password.value);

            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&()_+{}[\]:;<>,.?~\-]).{8,}$/; //conditions mdp

            const checkPassword = regex.test(password.value);
            console.log('Résultat de la vérification du mot de passe:', checkPassword);

            if (!username || !email || !checkPassword) {
                console.error('Veuillez remplir tous les champs et respecter les conditions du mot de passe.');
                alert('Veuillez remplir tous les champs et respecter les conditions du mot de passe.');
            } else {
                console.log('Formulaire soumis avec succès !');
                alert('Formulaire soumis avec succès !');
            }
        });
    } else {
        console.error('Le formulaire ne peut pas être rempli.');
    }
});
