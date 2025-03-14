// Données simulées de vidéos
const videos = [
    { title: "Film d'action", type: "films", thumbnail: "https://via.placeholder.com/250x150.png?text=Film+Action", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Série comique", type: "series", thumbnail: "https://via.placeholder.com/250x150.png?text=Série+Comique", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Thriller", type: "films", thumbnail: "https://via.placeholder.com/250x150.png?text=Thriller", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "Série dramatique", type: "series", thumbnail: "https://via.placeholder.com/250x150.png?text=Série+Dramatique", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

// Sélection des éléments
const videoGrid = document.querySelector('.video-grid');
const videoPlayer = document.getElementById('player');
const videoElement = document.getElementById('video-element');
const navButtons = document.querySelectorAll('.nav-btn');

// Afficher les vidéos initialement
renderVideos('all');

// Filtrer les vidéos
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');
        renderVideos(filter);
    });
});

function renderVideos(filter) {
    videoGrid.innerHTML = '';
    const filteredVideos = filter === 'all' ? videos : videos.filter(v => v.type === filter);
    
    filteredVideos.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('video-card');
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
