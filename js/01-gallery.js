import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const galleryList = document.querySelector('.gallery')

const makeMarkup = createGalleryImage(galleryItems)
galleryList.insertAdjacentHTML('beforeend', makeMarkup)

function createGalleryImage (items) {
   return items.map(item => { 
   return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`}).join('')
}

galleryList.addEventListener('click', onImageClick)

function onImageClick (event) {
    
    if (event.target.classList.contains('gallery__link')) {
    console.dir(event.target.alt);
}
}