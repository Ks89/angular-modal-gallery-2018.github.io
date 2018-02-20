import { RouterModule, Routes } from '@angular/router';

import { ArraySimpleComponent } from './array-simple/array-simple.component';
import { DemoComponent } from './demo.component';
import { DownloadSimpleComponent } from './download-simple/download-simple.component';
import { DownloadAdvancedComponent } from './download-advanced/download-advanced.component';
import { ExtUrlSimpleComponent } from './exturl-simple/exturl-simple.component';
import { OutputEventsComponent } from './output-events/output-events.component';
import { AddImageArrayComponent } from './add-image-array/add-image-array.component';
import { DescriptionCustomComponent } from './description-custom/description-custom.component';
import { DescriptionFullCustomComponent } from './description-full-custom/description-full-custom.component';
import { ArrayImagePointerComponent } from './array-image-pointer/array-image-pointer.component';
import { CloseOusideComponent } from './close-outside/close-outside.component';
import { ButtonsConfigComponent } from './buttons-config/buttons-config.component';
import { KeyboardConfigComponent } from './keyboard-config/keyboard-config.component';
import { InfiniteSlidingComponent } from './infinite-sliding/infinite-sliding.component';
import { NoDotsAndPreviewsComponent } from './no-dots-and-previews/no-dots-and-previews.component';
import { SidePreviewsHiddenComponent } from './side-previews-hidden/side-previews-hidden.component';
import { OnlyCurrentImgComponent } from './only-current-img/only-current-img.component';
import { PreviewsCustomSizeComponent } from './previews-custom-size/previews-custom-size.component';

export const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {path: '', component: ArraySimpleComponent},
      {path: 'array-simple', component: ArraySimpleComponent},
      {path: 'output-events', component: OutputEventsComponent},
      {path: 'add-image-array', component: AddImageArrayComponent},

      {path: 'no-dots-and-previews', component: NoDotsAndPreviewsComponent},
      {path: 'side-previews-hidden', component: SidePreviewsHiddenComponent},
      {path: 'only-current-img', component: OnlyCurrentImgComponent},
      {path: 'preview-custom-size', component: PreviewsCustomSizeComponent},

      {path: 'close-outside', component: CloseOusideComponent},
      {path: 'download-simple', component: DownloadSimpleComponent},
      {path: 'download-advanced', component: DownloadAdvancedComponent},

      {path: 'infinite-sliding', component: InfiniteSlidingComponent},

      {path: 'loading-spinner-disable', component: ArrayImagePointerComponent},
      {path: 'loading-spinner-type', component: ArrayImagePointerComponent},

      {path: 'buttons-strategies', component: ButtonsConfigComponent},
      {path: 'buttons-custom-fa', component: ArrayImagePointerComponent},
      {path: 'exturl-newtab', component: ExtUrlSimpleComponent},

      {path: 'keyboard-config', component: KeyboardConfigComponent},
      {path: 'description-strategy', component: DescriptionCustomComponent},
      {path: 'description-full-custom', component: DescriptionFullCustomComponent},

      {path: 'previews-length', component: ArrayImagePointerComponent},
      {path: 'previews-no-arrows', component: ArrayImagePointerComponent},
      {path: 'previews-not-clickable', component: ArrayImagePointerComponent},
      {path: 'previews-custom-size', component: ArrayImagePointerComponent},

      {path: 'accessibility', component: ArrayImagePointerComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
