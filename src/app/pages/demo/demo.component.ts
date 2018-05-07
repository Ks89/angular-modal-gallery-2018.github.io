import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { PageScrollInstance, PageScrollService } from 'ngx-page-scroll';

import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: 'demo.html'
})
export class DemoComponent {

  title: string = 'Modal Gallery';

  constructor(private titleService: TitleService) {
    this.titleService.titleEvent.subscribe((val: string) => {
      this.onUpdateTitle(val);
    });
  }

  onUpdateTitle(event: string) {
    this.title = event;
  }

}
