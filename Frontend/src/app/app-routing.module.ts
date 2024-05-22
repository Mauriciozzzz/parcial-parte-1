import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './Vista/vista.component';
import { AllCarroComponent } from './View/carro/all-carro.component';
import { CreateCarroComponent } from './View/carro/create-carro.component';
import { UpdateCarroComponent } from './View/carro/update-carro.component';
import { AllCategoriaComponent } from './View/categoria/all-categoria.component';
import { CreateCategoriaComponent } from './View/categoria/create-categoria.component';
import { UpdateCategoriaComponent } from './View/categoria/update-categoria.component';


const routes: Routes = [
  { path: 'vista', component: VistaComponent },

  { path: 'allCarro', component: AllCarroComponent },
  { path: 'crearCarro', component: CreateCarroComponent },
  { path: 'updateCarro', component: UpdateCarroComponent },

  { path: 'allCategoria', component: AllCategoriaComponent },
  { path: 'crearCategoria', component: CreateCategoriaComponent },
  { path: 'updateCategoria/:id', component: UpdateCategoriaComponent },
  { path: '**', redirectTo: 'vista', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }