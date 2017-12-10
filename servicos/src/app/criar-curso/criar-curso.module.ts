import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarCursoComponent } from './criar-curso.component';
import { CursosService } from '../cursos/cursos.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CriarCursoComponent],
  // providers: [CursosService],
  exports: [CriarCursoComponent]
})
export class CriarCursoModule { }
