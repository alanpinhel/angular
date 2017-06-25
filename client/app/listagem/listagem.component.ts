import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoService } from "../foto/foto.service";

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 
    fotos: Object[] = [];
    service: FotoService;
    mensagem: string = "";

    constructor(service: FotoService, http: Http) {
        this.service = service;
        service.lista()
            .subscribe(fotos => this.fotos = fotos, err => console.log(err));
    }

    remove(foto) {
        this.service.remove(foto)
            .subscribe(() => {
                let novasFotos = this.fotos.slice(0);
                let indice = novasFotos.indexOf(foto);
                novasFotos.splice(indice, 1);
                this.fotos = novasFotos;
                this.mensagem = "Foto removida com sucesso";
            }, err => {
                this.mensagem = "Falha em remover a foto";
            });
    }
}