import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this._route.params
      .subscribe((params: any) => {
        const id = params['id'];
        this.aluno = this._alunosService.getAluno(parseInt(id, 10));
      });
  }

  editarContato() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
