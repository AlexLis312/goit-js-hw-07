import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryImages(items) {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`;
  }).join("");
}
const makeMarkup = createGalleryImages(galleryItems);
galleryList.insertAdjacentHTML("beforeend", makeMarkup);

 new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt', 
  captionPosition: 'bottom',
  captionDelay: 250,
    });


