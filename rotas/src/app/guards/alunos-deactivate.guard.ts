import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('guarda de desativação');
    return component.podeMudarRota ? component.podeMudarRota() : true;
  }

}