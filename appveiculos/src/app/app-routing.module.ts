import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadveiculoComponent } from './components/cadveiculo/cadveiculo.component';

const routes: Routes = [
  {path: "", component: CadveiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
