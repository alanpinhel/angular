import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe.component';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { RouterStub } from '../../testing/router-stub';
import { CursosService } from '../cursos.service';

describe('CursoDetalheComponent', () => {
  let component: CursoDetalheComponent;
  let fixture: ComponentFixture<CursoDetalheComponent>;
  const activatedRouteStub = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CursoDetalheComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useClass: RouterStub },
        CursosService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRouteStub.testParams = { id: 1 };
    fixture = TestBed.createComponent(CursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
