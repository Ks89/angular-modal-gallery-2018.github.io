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

import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';

import { Image } from '@ks89/angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml } from '../../codemirror.config';

@Component({
  selector: 'app-side-previews-hidden-page',
  templateUrl: 'side-previews-hidden.html'
})
export class SidePreviewsHiddenComponent {
  images: Image[] = [...IMAGES_ARRAY];

  configHtml: any = codemirrorHtml;

  codeHtml: string;

  constructor(private titleService: TitleService, private scrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {

    // scroll to the top of the document
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, 'div#demo');
    this.scrollService.start(pageScrollInstance);

    this.titleService.titleEvent.emit('Examples - Hidden side-previews');

    this.codeHtml =
      `<ks-modal-gallery [id]="0" [modalImages]="images"
    [slideConfig]="{infinite: false, sidePreviews: {show: false}}"></ks-modal-gallery>`;
  }
}
