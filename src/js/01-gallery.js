// Add imports above this line


import '../css/common.css';
import '../css/01-gallery.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


console.log(SimpleLightbox);

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgGallery = CreateAndRenderMarkupGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgGallery);
function CreateAndRenderMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div >
`;
    })
      .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});