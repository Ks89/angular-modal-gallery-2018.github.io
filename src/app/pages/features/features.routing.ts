import { Routes, RouterModule } from '@angular/router';

import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { FeaturesComponent } from './features.component';
import { GlobalConfigComponent } from './global-config/global-config.component';
import { InputDefaultValuesComponent } from './input-default-values/input-default-values';

export const routes: Routes = [
  { path: '',
    component: FeaturesComponent,
    children: [
      { path: '',                       component: ModalGalleryComponent },
      { path: 'modalGallery',           component: ModalGalleryComponent },
      { path: 'globalConfig',           component: GlobalConfigComponent },
      { path: 'defaultValues',          component: InputDefaultValuesComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
