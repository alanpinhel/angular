import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();
  private _cursos = ['Angular 2', 'Java', 'Phonegap'];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return this._cursos;
  }

  addCurso(curso: string) {
    this._cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
