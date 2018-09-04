import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos = ['Angular 2'];

  mostrarCursos = false;

  constructor() { }

  ngOnInit() { }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
