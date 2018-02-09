import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SHARED_COMPONENTS } from './components/components';
import { NgxPageScrollModule, PageScrollConfig } from 'ngx-page-scroll';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxPageScrollModule,
  ],
  exports: [
    SHARED_COMPONENTS
  ],
  declarations: [
    SHARED_COMPONENTS
  ],
  providers: [ ]
})

export class SharedModule {
  constructor() {
    PageScrollConfig.defaultScrollOffset = 56;
    PageScrollConfig.defaultDuration = 0;
    PageScrollConfig.defaultInterruptible = true;
  }
}
