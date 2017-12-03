import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'] // ,
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoValorInput: ElementRef;

  decrementa(): void {
    // this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  incrementa(): void {
    // this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  constructor() {}

  ngOnInit() {}
}
