import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    // private _alunosService: AlunosService
  ) { }

  ngOnInit() {
    /* this.inscricao = this._route.params
      .subscribe((params: any) => {
        const id = params['id'];
        this.aluno = this._alunosService.getAluno(parseInt(id, 10));
      }); */
    console.log('ngOnInit: AlunoDetalheComponent');
    this.inscricao = this._route.data.subscribe((info: {aluno: Aluno}) => {
      console.log('Recebendo o obj Aluno do resolver');
      this.aluno = info.aluno;
    });
  }

  editarContato() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
