import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);
galleryList.insertAdjacentHTML("beforeend",items);



function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            
            return `<li class = "gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
        }).join('');
    
}


var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

    
    


