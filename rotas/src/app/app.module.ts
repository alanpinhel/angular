import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEcontradoComponent } from './cursos/curso-nao-econtrado/curso-nao-econtrado.component';
import { CursosService } from './cursos/cursos.service';
import { AppRountingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent/*,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEcontradoComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    // CursosModule,
    // AlunosModule,
    AppRountingModule
    // routing
  ],
  providers: [CursosService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
