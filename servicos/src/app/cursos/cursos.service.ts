import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();
  private _cursos = ['Angular 2', 'Java', 'Phonegap'];

  constructor(private _logService: LogService) {
    console.log('CursosService');
  }

  getCursos(): string[] {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this._cursos;
  }

  addCurso(curso: string) {
    this._logService.consoleLog(`Criando um novo curso ${curso}`);
    this._cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
