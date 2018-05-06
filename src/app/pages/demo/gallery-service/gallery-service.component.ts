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

import { Image, GalleryService } from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'app-gallery-service-page',
  templateUrl: 'gallery-service.html'
})
export class GalleryServiceComponent {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private titleService: TitleService,
              private galleryService: GalleryService) {
    this.titleService.titleEvent.emit('Examples - Gallery service');

    this.codeHtml =
      `<button class="btn btn-primary" (click)="openModalViaService(1, 2)"><i class="fas fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Open galleryId=1 at index=2</button>
<ks-modal-gallery [id]="1" [modalImages]="images"></ks-modal-gallery>`;

    this.codeTypescript =
      `openModalViaService(id: number | undefined, index: number) {
  console.log('opening gallery with index ' + index);
  this.galleryService.openGallery(id, index);
}`;
  }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }
}
