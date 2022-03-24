import { Popup } from '../components/Popup.js';

import * as constants from '../utils/constants.js';

export class PopupWithImage extends Popup {
  open(nameImage, linkImage) {
    constants.popupZoomImage.src = '';
    constants.popupZoomImage.alt = '';
    constants.popupZoomSubtitle.textContent = '';
    constants.popupZoomImage.src = linkImage;
    constants.popupZoomImage.alt = nameImage;
    constants.popupZoomSubtitle.textContent = nameImage;
    super.open();
  }
}