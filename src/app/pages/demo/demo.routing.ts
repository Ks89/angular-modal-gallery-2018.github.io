import { RouterModule, Routes } from '@angular/router';

import { ArraySimpleComponent } from './array-simple/array-simple.component';
import { DemoComponent } from './demo.component';
import { DownloadSimpleComponent } from './download-simple/download-simple.component';
import { DownloadAdvancedComponent } from './download-advanced/download-advanced.component';
import { OutputEventsComponent } from './output-events/output-events.component';
import { AddImageArrayComponent } from './add-image-array/add-image-array.component';
import { DescriptionCustomComponent } from './description-custom/description-custom.component';
import { DescriptionFullCustomComponent } from './description-full-custom/description-full-custom.component';
import { CloseOusideComponent } from './close-outside/close-outside.component';
import { KeyboardConfigComponent } from './keyboard-config/keyboard-config.component';
import { InfiniteSlidingComponent } from './infinite-sliding/infinite-sliding.component';
import { NoDotsAndPreviewsComponent } from './no-dots-and-previews/no-dots-and-previews.component';
import { SidePreviewsHiddenComponent } from './side-previews-hidden/side-previews-hidden.component';
import { OnlyCurrentImgComponent } from './only-current-img/only-current-img.component';
import { PreviewsCustomSizeComponent } from './previews-custom-size/previews-custom-size.component';
import { LoadingSpinnerDisableComponent } from './loading-spinner-disable/loading-spinner-disable.component';
import { LoadingSpinnerTypeComponent } from './loading-spinner-type/loading-spinner-type.component';
import { PreviewsLengthComponent } from './previews-length/previews-length.component';
import { PreviewsNotClickableComponent } from './previews-not-clickable/previews-not-clickable.component';
import { PreviewsNoArrowsComponent } from './previews-no-arrows/previews-no-arrows.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ButtonsCustomFaComponent } from './buttons-custom-fa/buttons-custom-fa.component';
import { ButtonsStrategiesComponent } from './buttons-strategies/buttons-strategies.component';
import { ButtonsExturlNewtabComponent } from './buttons-exturl-newtab/buttons-exturl-newtab.component';
import { PlainGalleryLayoutsComponent } from './plain-gallery-layouts/plain-gallery-layouts.component';
import { PlainGalleryAtagsComponent } from './plain-gallery-atags/plain-gallery-atags.component';
import { PlainGalleryImagePointerComponent } from './plain-gallery-image-pointer/plain-gallery-image-pointer.component';
import { PlainGalleryCustomWithDescComponent } from './plain-gallery-custom-with-desc/plain-gallery-custom-with-desc.component';

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

      {path: 'loading-spinner-disable', component: LoadingSpinnerDisableComponent},
      {path: 'loading-spinner-type', component: LoadingSpinnerTypeComponent},

      {path: 'keyboard-config', component: KeyboardConfigComponent},
      {path: 'description-strategy', component: DescriptionCustomComponent},
      {path: 'description-full-custom', component: DescriptionFullCustomComponent},

      {path: 'previews-length', component: PreviewsLengthComponent},
      {path: 'previews-no-arrows', component: PreviewsNoArrowsComponent},
      {path: 'previews-not-clickable', component: PreviewsNotClickableComponent},
      {path: 'previews-custom-size', component: PreviewsCustomSizeComponent},

      {path: 'buttons-strategies', component: ButtonsStrategiesComponent},
      {path: 'buttons-exturl-newtab', component: ButtonsExturlNewtabComponent},
      {path: 'buttons-custom-fa', component: ButtonsCustomFaComponent},

      {path: 'plain-layouts', component: PlainGalleryLayoutsComponent},
      {path: 'plain-atags', component: PlainGalleryAtagsComponent},
      {path: 'plain-image-pointer', component: PlainGalleryImagePointerComponent},
      {path: 'plain-custom-desc', component: PlainGalleryCustomWithDescComponent},

      {path: 'accessibility', component: AccessibilityComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
