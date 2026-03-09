export async function fetchImages(count = 4) {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        return data.slice(0, count);
    } catch (error) {
        console.error('Помилка завантаження картинок:', error);
        return [];
    }
}