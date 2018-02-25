import { Routes, RouterModule } from '@angular/router';

import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { FeaturesComponent } from './features.component';
import { GlobalConfigComponent } from './global-config/global-config.component';
import { InputDefaultValuesComponent } from './input-default-values/input-default-values';
import { PlainGalleryComponent } from './plain-gallery/plain-gallery.component';
import { PreviewsComponent } from './previews/previews.component';
import { UpperButtonsComponent } from './upper-buttons/upper-buttons.component';

export const routes: Routes = [
  { path: '',
    component: FeaturesComponent,
    children: [
      { path: '',                       component: ModalGalleryComponent },
      { path: 'modal-gallery',           component: ModalGalleryComponent },
      { path: 'plain-gallery',           component: PlainGalleryComponent },
      { path: 'previews',               component: PreviewsComponent },
      { path: 'upper-buttons',          component: UpperButtonsComponent },
      { path: 'global-config',           component: GlobalConfigComponent },
      { path: 'default-values',          component: InputDefaultValuesComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
