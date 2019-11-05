import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RechercheComponent} from './recherche/recherche.component';
import {GalerieComponent} from './galerie/galerie.component';

const routes: Routes = [
  {
    path: '',
    component: RechercheComponent,
  },
  {
    path: 'livres/:titre',
    component: GalerieComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
