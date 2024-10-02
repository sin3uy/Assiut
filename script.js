// ملف script.js

// مفتاح API من Unsplash
const accessKey = 'ضع مفتاح API الخاص بك هنا';

// العناصر من الـ HTML
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const imageContainer = document.getElementById('image-container');

// وظيفة البحث عن الصور
async function searchImages(query) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
    const data = await response.json();
    return data.results;
}

// وظيفة عرض الصور
function displayImages(images) {
    imageContainer.innerHTML = ''; // تفريغ الحاوية قبل عرض النتائج الجديدة
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imageContainer.appendChild(imgElement);
    });
}

// تفعيل البحث عند الضغط على زر البحث
searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    if (query) {
        const images = await searchImages(query);
        displayImages(images);
    }
});