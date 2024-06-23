import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector(".gallery");

const arrayDiv=galleryItems.map((item) => {
    // // const ulImage=getElementsByClassName('gallery')
    const divBoxImage = document.createElement("div");
    divBoxImage.setAttribute('class', 'gallery__item');
    const aImage = document.createElement('a');
    aImage.setAttribute('class', 'gallery__link');
    const image = document.createElement('img');
    image.setAttribute('class', 'gallery__image');
    image.src=item.preview;
    image.alt=item.description;
    image.dataset.source=item.original;
    aImage.append(image);
    divBoxImage.append(aImage);
    return divBoxImage;
});