import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BuscaComponent } from './pages/busca/busca.component';
import { ComplexidadeComponent } from './pages/complexidade/complexidade.component';
import { OrdenacaoComponent } from './pages/ordenacao/ordenacao.component';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './pages/menu/menu.component';
import { Error404Component } from './pages/error404/error404.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    ComplexidadeComponent,
    OrdenacaoComponent,
    MenuComponent,
    Error404Component,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
