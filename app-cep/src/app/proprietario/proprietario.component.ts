import { Component, OnInit } from '@angular/core';
import { NgxViacepService, Endereco, CEPError } from "@brunoc/ngx-viacep"; // Importando o serviço
@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.css']
})
export class ProprietarioComponent implements OnInit {
  title = "app";
  constructor(private viacep: NgxViacepService) {} // Injetando o serviço

  ngOnInit(): void {
    this.viacep
    .buscarPorCep("01001000")
    .pipe(
      catchError((error: CEPError) => {
        // Ocorreu algum erro :/
        console.log(error.message);
        return EMPTY;
      })
    )
    .subscribe((endereco: Endereco) => {
      // Endereço retornado :)
      console.log(endereco);
    });

  }

}
