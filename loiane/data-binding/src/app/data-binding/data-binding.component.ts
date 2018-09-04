import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  url = 'loiane.com';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string;
  valorSalvo: string;
  isMouseOver = false;
  nomeDoCurso = 'Angular';
  valorInicial = 15;

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado(): void {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor): void {
    this.valorSalvo = valor;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento): void {
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit() {}
}
