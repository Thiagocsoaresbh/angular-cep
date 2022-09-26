import { Injectable } from '@angular/core';
import { NgxViacepService } from "@brunoc/ngx-viacep"; // Importando o serviço
@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {
  title = "app";
  constructor(private viacep: NgxViacepService) {} // Injetando o serviço
}
