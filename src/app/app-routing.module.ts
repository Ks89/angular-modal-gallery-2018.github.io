import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { MigrationComponent } from './pages/migration/migration.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'gettingStarted', component: GettingStartedComponent},

  {
    path: 'features',
    loadChildren: './pages/features/features.module#FeaturesModule',
    data: {preload: true}
  },

  {
    path: 'demo',
    loadChildren: './pages/demo/demo.module#DemoModule',
    data: {preload: true}
  },

  {path: 'migration', component: MigrationComponent},

  {path: 'about', component: AboutComponent},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: Boolean(history.pushState) === false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
