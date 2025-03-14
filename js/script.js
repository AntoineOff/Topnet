// Données simulées avec nouvelles catégories
const videos = [
    { title: "Action Explosive", type: "films", thumbnail: "https://via.placeholder.com/280x180.png?text=Action", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Comédie Légère", type: "series", thumbnail: "https://via.placeholder.com/280x180.png?text=Comédie", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Nature Sauvage", type: "documentaires", thumbnail: "https://via.placeholder.com/280x180.png?text=Nature", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Aventure Animée", type: "animes", thumbnail: "https://via.placeholder.com/280x180.png?text=Animé", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Thriller Sombre", type: "films", thumbnail: "https://via.placeholder.com/280x180.png?text=Thriller", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Série Romantique", type: "series", thumbnail: "https://via.placeholder.com/280x180.png?text=Romance", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Espace Infini", type: "documentaires", thumbnail: "https://via.placeholder.com/280x180.png?text=Espace", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Combat Épique", type: "animes", thumbnail: "https://via.placeholder.com/280x180.png?text=Combat", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

// Sélection des éléments
const videoGrid = document.querySelector('.video-grid');
const videoPlayer = document.getElementById('player');
const videoElement = document.getElementById('video-element');
const navButtons = document.querySelectorAll('.nav-btn');

// Afficher les vidéos initialement
renderVideos('all');

// Filtrer les vidéos avec animation
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        videoGrid.style.opacity = '0';
        setTimeout(() => renderVideos(filter), 300);
        setTimeout(() => videoGrid.style.opacity = '1', 400);
    });
});

function renderVideos(filter) {
    videoGrid.innerHTML = '';
    const filteredVideos = filter === 'all' ? videos : videos.filter(v => v.type === filter);
    
    filteredVideos.forEach((video, index) => {
        const card = document.createElement('div');
        card.classList.add('video-card');
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        `;
        card.addEventListener('click', () => playVideo(video.src));
        videoGrid.appendChild(card);
    });
}

// Lecture de la vidéo
function playVideo(src) {
    videoElement.src = src;
    videoPlayer.classList.add('active');
    videoElement.play();
}

// Fermer le lecteur
function closePlayer() {
    videoPlayer.classList.remove('active');
    videoElement.pause();
    videoElement.src = '';
}
