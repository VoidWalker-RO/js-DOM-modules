export function renderGallery(gallery, images) {
    gallery.innerHTML = '';

    images.forEach(img => {
        const imgElem = document.createElement('img');
        imgElem.src = `https://picsum.photos/id/${img.id}/300/200`;
        imgElem.alt = img.author;

        gallery.appendChild(imgElem);
    });
}

export function removeLast(images) {
    images.pop();
}

export function reverseGallery(images) {
    images.reverse();
}

export function shuffleGallery(images) {
    images.sort(() => Math.random() - 0.5);
}

export function clearGallery(images) {
    images.length = 0;
}