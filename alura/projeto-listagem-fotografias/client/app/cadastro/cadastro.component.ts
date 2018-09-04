import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FotoService } from "../foto/foto.service";
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router"

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = "";

    constructor(fotoService: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        this.router = router;
        this.route = route;
        this.service = fotoService;
        
        this.route.params.subscribe(params => {
            let id = params['id'];

            if (id) {
                this.service.buscaPorId(id).subscribe(
                    foto => this.foto = foto,
                    err => console.log(err)
                );
            }
        });

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {
        event.preventDefault();

        this.service.cadastra(this.foto)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.foto = new FotoComponent();
                if (!res.inclusao) this.router.navigate([""]);
            }, err => console.log(err));
    }
}