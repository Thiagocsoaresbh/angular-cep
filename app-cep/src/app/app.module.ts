import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { NgxViacepModule, CEPError } from "@brunoc/ngx-viacep"; // Importando o módulo
import { AppComponent } from './app.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { FormsModule } from '@angular/forms';
import { ProprietarioService } from './proprietario.service';

@NgModule({
  declarations: [
    AppComponent,
    ProprietarioComponent
  ],
  imports: [
    BrowserModule,
    NgxViacepModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProprietarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
