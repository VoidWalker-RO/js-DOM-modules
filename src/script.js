const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMore');
const clearGalleryBtn = document.getElementById('clearGallery');
const removeLastBtn = document.getElementById('removeLast');
const reverseGalleryBtn = document.getElementById('reverseGallery');
const shuffleGalleryBtn = document.getElementById('shuffleGallery');

let allImages = [];
let displayedImages = [];

async function fetchImages(count = 4) {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        // Фільтруємо тільки нові картинки, які ще не показані
        const newImages = data.filter(img => !allImages.some(i => i.id === img.id)).slice(0, count);
        allImages.push(...newImages);
        displayedImages.push(...newImages);
        renderGallery();
    } catch (error) {
        console.error('Помилка завантаження картинок:', error);
    }
}

function renderGallery() {
    gallery.innerHTML = '';
    displayedImages.forEach(img => {
        const imgElem = document.createElement('img');
        imgElem.src = `https://picsum.photos/id/${img.id}/300/200`;
        imgElem.alt = img.author;
        gallery.appendChild(imgElem);
    });
}

loadMoreBtn.addEventListener('click', () => fetchImages(4));

clearGalleryBtn.addEventListener('click', () => {
    displayedImages = [];
    renderGallery();
});

removeLastBtn.addEventListener('click', () => {
    displayedImages.pop();
    renderGallery();
});

reverseGalleryBtn.addEventListener('click', () => {
    displayedImages.reverse();
    renderGallery();
});

shuffleGalleryBtn.addEventListener('click', () => {
    displayedImages.sort(() => Math.random() - 0.5);
    renderGallery();
});

fetchImages(4);