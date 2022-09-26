import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
