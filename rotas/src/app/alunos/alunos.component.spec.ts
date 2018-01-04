import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { alunoMock1, alunoMock2 } from './testing/mocks';

describe('AlunosComponent', () => {
  let component: AlunosComponent;
  let fixture: ComponentFixture<AlunosComponent>;
  let mockAlunosService: AlunosService;

  // let mockAlunosService = {
  //   getAlunos: jasmine
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosComponent],
      providers: [
        // { provide: AlunosService, useValue: mockAlunosService }
        AlunosService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosComponent);
    component = fixture.componentInstance;
    mockAlunosService = fixture.debugElement.injector.get(AlunosService);
  });

  it('should create', () => {
    spyOn(mockAlunosService, 'getAlunos').and.returnValue([]);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('mock diferente por teste', () => {
    spyOn(mockAlunosService, 'getAlunos').and.returnValue([alunoMock1, alunoMock2]);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
