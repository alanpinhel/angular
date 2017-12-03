import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DiretivaNgifDirective } from './diretiva-ngif.directive';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';


@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifDirective,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
