import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosComponent } from './cursos/cursos.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CriarCursoComponent,
        CursosComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
