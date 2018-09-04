import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AlunoFormComponent } from './aluno-form.component';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { AlunosService } from '../alunos.service';
import { alunoMock1 } from '../testing/mocks';

class AlunosServicesSpy {
  getAluno = jasmine.createSpy('getAluno').and.returnValue(alunoMock1);
}

describe('AlunoFormComponent', () => {
  let component: AlunoFormComponent;
  let fixture: ComponentFixture<AlunoFormComponent>;
  const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AlunoFormComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: AlunosService, useClass: AlunosServicesSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.testParams = { id: 1 };
    fixture = TestBed.createComponent(AlunoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
