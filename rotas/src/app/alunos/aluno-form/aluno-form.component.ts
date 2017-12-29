import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
  aluno: any = {};
  inscricao: Subscription;
  private _formMudou = false;

  constructor(
    private _route: ActivatedRoute,
    private _alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this._route.params
      .subscribe((params: any) => {
        const id = params['id'];
        this.aluno = this._alunosService.getAluno(id);
        if (this.aluno === null) {
          this.aluno = {};
        }
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this._formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this._formMudou) {
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  podeDesativar() {
    this.podeMudarRota();
  }

}
