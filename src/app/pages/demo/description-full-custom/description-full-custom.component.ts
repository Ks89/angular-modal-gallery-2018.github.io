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

import { DescriptionStrategy, Description, Image } from 'angular-modal-gallery';

import { IMAGES_ARRAY } from '../images';
import { TitleService } from '../../../core/services/title.service';
import { codemirrorHtml, codemirrorTs } from '../../codemirror.config';

@Component({
  selector: 'app-description-full-custom-page',
  templateUrl: 'description-full-custom.html',
  styleUrls: ['description-full-custom.scss']
})
export class DescriptionFullCustomComponent {
  images: Image[] = [...IMAGES_ARRAY];

  customFullDescription: Description = {
    // ALWAYS_VISIBLE is mandatory to use customFullDescription
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    customFullDescription: '<ol><li>Custom</li><li>description of the</li><li>current visible</li><li>image</li></ol>',
    style: {
      bgColor: 'rgba(255, 0, 0, .5)',
      textColor: 'blue',
      margin: {
        marginTop: '3px',
        marginBottom: '0px',
        marginLeft: '5px',
        marginRight: '5px'
      }
    }
  };

  configHtml: any = codemirrorHtml;
  configTs: any = codemirrorTs;

  codeHtml: string;
  codeTypescript: string;

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.emit('Examples - Description full custom');

    this.codeHtml =
      `<ks-modal-gallery [modalImages]="images"
    [description]="customFullCustomDescription"></ks-modal-gallery>`;

    this.codeTypescript =
      `  images: Image[]; // init this value with your images

  customFullDescription: Description = {
    // ALWAYS_VISIBLE is mandatory to use customFullDescription
    strategy: DescriptionStrategy.ALWAYS_VISIBLE,
    customFullDescription: '<ol><li>Custom</li><li>description of the</li><li>current visible</li><li>image</li></ol>',
    style: {
      bgColor: 'rgba(255, 0, 0, .5)',
      textColor: 'blue',
      margin: {
        marginTop: '3px',
        marginBottom: '0px',
        marginLeft: '5px',
        marginRight: '5px'
      }
    }
  };`;
  }
}
