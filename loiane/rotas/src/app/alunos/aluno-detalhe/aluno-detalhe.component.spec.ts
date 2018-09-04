import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunoDetalheComponent } from './aluno-detalhe.component';
import { RouterStub } from '../../testing/router-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { Aluno } from '../aluno';
import { alunoMock1 } from '../testing/mocks';

describe('AlunoDetalheComponent', () => {
  let component: AlunoDetalheComponent;
  let fixture: ComponentFixture<AlunoDetalheComponent>;
  const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoDetalheComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.testData = { aluno: alunoMock1 };
    fixture = TestBed.createComponent(AlunoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
