import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaComponent } from './pages/busca/busca.component';
import { OrdenacaoComponent } from './pages/ordenacao/ordenacao.component';
import { ComplexidadeComponent } from './pages/complexidade/complexidade.component';

const routes: Routes = [
  { path: 'ordenacao', component: OrdenacaoComponent },
  { path: 'busca', component: BuscaComponent},
  { path: 'complexidade', component: ComplexidadeComponent},
  { path: '', component: OrdenacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
