/*
 * MIT License
 *
 * Copyright (c) 2017-2018 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Component } from '@angular/core';

import { Action, AdvancedLayout, Image, ImageModalEvent, PlainGalleryConfig, PlainGalleryStrategy } from 'angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'app-array-image-pointer-page',
  templateUrl: 'array-image-pointer.html',
  styleUrls: ['array-image-pointer.scss']
})
export class ArrayImagePointerComponent {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.emit('Demo - Array image pointer');

    this.codeHtml =
      `<div *ngFor="let img of images; let i = index">
    <div class="float-left" *ngIf="i <= 2">
      <a class="more" *ngIf="i==2" (click)="openImageModal(img)">+{{images.length - 3}} more </a>
      <img *ngIf="img.thumb" class="list-img" src="{{img.thumb}}"
        (click)="openImageModal(img)" alt='{{img.description}}'/>
      <img *ngIf="!img.thumb" class="list-img" src="{{img.img}}"
        (click)="openImageModal(img)" alt='{{img.description}}'/>
    </div>
  </div>
  <div *ngIf="openModalWindow">
    <modal-gallery [modalImages]="images"
                   [imagePointer]="imagePointer"
                   (close)="onCloseImageModal($event)"></modal-gallery>
  </div>`;

    this.codeTypescript =
      `images: Image[]; // init this value with your images
  openModalWindow: boolean = false;
  imagePointer: number = 0;
  
  openImageModal(image: Image) {
    this.imagePointer = this.images.indexOf(image);
    this.openModalWindow = true;
  }
  
  onCloseImageModal(event: ImageModalEvent) {
    this.openModalWindow = false;
  }`;
  }

  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, {layout: new AdvancedLayout(index, true)});
  }

  // It's mandatory, because you have to manage `openModalWindow` manually
  // So, you mast listen for the close event to set `openModalWindow` to false
  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    // reset custom plain gallery config
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, {layout: new AdvancedLayout(-1, true)});
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }

}
