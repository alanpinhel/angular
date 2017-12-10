import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CursosModule, CriarCursoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
