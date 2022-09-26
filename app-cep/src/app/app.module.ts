import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { NgxViacepModule } from "@brunoc/ngx-viacep"; // Importando o módulo
import { AppComponent } from './app.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietarioComponent
  ],
  imports: [
    BrowserModule,
    NgxViacepModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
