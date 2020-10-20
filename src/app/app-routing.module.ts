import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './pages/busca/busca.component';
import { OrdenacaoComponent } from './pages/ordenacao/ordenacao.component';
import { ComplexidadeComponent } from './pages/complexidade/complexidade.component';
import { MenuComponent } from './pages/menu/menu.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  { path: 'ordenacao', component: OrdenacaoComponent},
  { path: 'busca', component: BuscaComponent},
  { path: 'complexidade', component: ComplexidadeComponent},
  { path: 'menu', component: MenuComponent},
  { path: '', component: OrdenacaoComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
