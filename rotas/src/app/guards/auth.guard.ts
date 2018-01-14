import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificaAcesso();
  }

  verificaAcesso() {
    if (this._authService.usuarioEstaAutenticado()) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: verificando se usuário pode carregar o cod módulo');
    return this.verificaAcesso();
  }
}
