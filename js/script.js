// Sélection des éléments
const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('signupModal');
const closeModalBtn = document.querySelector('.close');
const signupForm = document.getElementById('signupForm');

// Ouvrir la modale
openModalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

// Fermer la modale
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fermer la modale en cliquant en dehors
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Gérer la soumission du formulaire (simulation)
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Inscription :', { username, email, password });
    alert('Inscription réussie ! (Simulation)');
    modal.style.display = 'none';
    signupForm.reset();
});
