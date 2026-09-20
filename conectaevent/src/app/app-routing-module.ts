import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
  },

  {
    path: 'listadeexercicios', 
    loadChildren: () => import('./listadeexercicio/listadeexercicio-module').then(m => m.ListadeexercicioModule)
  },

  {
    path: 'lista-de-exercicio-2',
    loadChildren: () => import('./lista-de-exercicio-2/lista-de-exercicio-2-module').then(m => m.ListaDeExercicio2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
