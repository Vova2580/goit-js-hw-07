import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const galleryItem = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItem);

galleryContainer.addEventListener("click", onGalleruContainerClick);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
        <a
        class="gallery__link"
        href = "${original}"
        >
        <img
            class="gallery__image"
            src = "${preview}"
            data-source = "${original}"
            alt = "${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}

function onGalleruContainerClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const bigImageUrl = event.target.getAttribute("data-source");
  
    const instance = basicLightbox.create(`<img src=${bigImageUrl}>`, {
      onShow: (instance) => {
        document.addEventListener("keydown", onInstancePress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onInstancePress);
      },
    });
    
    instance.show();


  function onInstancePress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
