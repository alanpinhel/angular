import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit {
    @Input() titulo: string;
    elemento: ElementRef;

    ngOnInit(): void {
        this.titulo = this.titulo.length > 7 ? this.titulo.substr(0, 7) + "..." : this.titulo;
    }

    constructor(elemento: ElementRef) {
        this.elemento = elemento;
    }

    fadeOut(cb) {
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}