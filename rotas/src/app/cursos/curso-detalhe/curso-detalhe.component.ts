import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute
  ) {
    // this.id = this._route.snapshot.params['id'];
    // console.log(this._route);
  }

  ngOnInit() {
    this.inscricao = this._route.params
      .subscribe((params: any) => {
        this.id = params['id'];
      });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
