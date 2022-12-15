import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
galleryList.insertAdjacentHTML("beforeend",items);

galleryList.addEventListener("click", onGalleryListClick);


function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
        }).join('');
    
}



function onGalleryListClick(evt) {
    evt.preventDefault();
}

