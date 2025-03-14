// Fonction de navigation avec transition
function navigateTo(page) {
    const container = document.querySelector('.container');
    
    // Animation de sortie
    container.style.animation = 'fadeOut 0.5s ease forwards';
    
    // Redirection après la fin de l'animation
    setTimeout(() => {
        switch(page) {
            case 'images':
                window.location.href = 'images.html';
                break;
            case 'videos':
                window.location.href = 'videos.html';
                break;
            case 'articles':
                window.location.href = 'articles.html';
                break;
        }
    }, 500);
}

// Animation de sortie
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`, styleSheet.cssRules.length);
