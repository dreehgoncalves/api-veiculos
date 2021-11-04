import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadveiculoComponent } from './components/cadveiculo/cadveiculo.component';
import { CadclienteComponent } from './components/cadcliente/cadcliente.component';
import { DetalhesveiculosComponent } from './components/detalhesveiculos/detalhesveiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadveiculoComponent,
    CadclienteComponent,
    DetalhesveiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
