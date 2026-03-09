import { fetchImages } from './api.js';
import {
    renderGallery,
    removeLast,
    reverseGallery,
    shuffleGallery,
    clearGallery
} from './gallery.js';

const gallery = document.getElementById('gallery');

const loadMoreBtn = document.getElementById('loadMore');
const clearGalleryBtn = document.getElementById('clearGallery');
const removeLastBtn = document.getElementById('removeLast');
const reverseGalleryBtn = document.getElementById('reverseGallery');
const shuffleGalleryBtn = document.getElementById('shuffleGallery');

let images = [];

async function loadImages() {
    const newImages = await fetchImages(4);
    images.push(...newImages);
    renderGallery(gallery, images);
}

loadMoreBtn.addEventListener('click', loadImages);

clearGalleryBtn.addEventListener('click', () => {
    clearGallery(images);
    renderGallery(gallery, images);
});

removeLastBtn.addEventListener('click', () => {
    removeLast(images);
    renderGallery(gallery, images);
});

reverseGalleryBtn.addEventListener('click', () => {
    reverseGallery(images);
    renderGallery(gallery, images);
});

shuffleGalleryBtn.addEventListener('click', () => {
    shuffleGallery(images);
    renderGallery(gallery, images);
});

loadImages();