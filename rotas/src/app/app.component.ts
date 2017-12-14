import { Component, OnInit } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mostrarMenu = false;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._authService.mostrarMenuEmitter
      .subscribe(mostrar => this.mostrarMenu = mostrar);
  }

}
