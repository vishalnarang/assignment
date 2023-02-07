import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'public-pages',
    loadChildren: () => import("./modules/public-pages/public-pages.module")
      .then(m => m.PublicPagesModule),
  },
  {
    path: 'home',
    loadChildren: () => import("./modules/home/home.module")
      .then(m => m.HomeModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/public-pages/signup'
  },
  { path: '**', redirectTo: '/public-pages/signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }