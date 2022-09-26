import { Component, OnInit } from '@angular/core';
import { NgxViacepService, Endereco, CEPError } from "@brunoc/ngx-viacep";
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.css']
})
export class ProprietarioComponent implements OnInit {
  title = "app-cep";
  constructor(private viacep: NgxViacepService) {}

  ngOnInit(): void {
    this.viacep
    .buscarPorCep("31250310")
    .pipe(
      catchError((error: CEPError) => {
        console.log(error.message);
        return EMPTY;
      })
    )
    .subscribe((endereco: Endereco) => {
      console.log(endereco);
    });

  }
}
