import { Image } from 'angular-modal-gallery';

import { environment } from '../../../environments/environment';

const PATH = environment.imgPath;

export const IMAGES_ARRAY: Image[] = [
  new Image(0, {
    img: `${PATH}/assets/images/gallery/img1.jpg`,
    extUrl: `http://www.google.com`
  }),
  new Image(1, {
    img: `${PATH}/assets/images/gallery/img2.jpg`,
    description: `Description 2`
  }),
  new Image(
    2,
    {
      img: `${PATH}/assets/images/gallery/img3.jpg`,
      description: `Description 3`,
      extUrl: `http://www.google.com`
    },
    {
      img: `${PATH}/assets/images/gallery/thumbs/img3.png`,
      title: `custom title 2`,
      alt: `custom alt 2`,
      ariaLabel: `arial label 2`
    }
  ),
  new Image(3, {
    img: `${PATH}/assets/images/gallery/img4.jpg`,
    description: `Description 4`,
    extUrl: `http://www.google.com`
  }),
  new Image(4, {
    img: `${PATH}/assets/images/gallery/img5.jpg`
  }, {
    img: `${PATH}/assets/images/gallery/thumbs/img5.jpg`
  })
];
