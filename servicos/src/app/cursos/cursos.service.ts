import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  private _cursos = ['Angular 2', 'Java', 'Phonegap'];

  getCursos(): string[] {
    return this._cursos;
  }

  addCurso(curso: string) {
    this._cursos.push(curso);
  }

}
