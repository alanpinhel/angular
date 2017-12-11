import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './curso-nao-econtrado/curso-nao-econtrado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEcontradoComponent
  ]
})
export class CursosModule {}