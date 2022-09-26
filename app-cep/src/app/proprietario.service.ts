import { Injectable } from '@angular/core';
import { NgxViacepService } from "@brunoc/ngx-viacep"; // Importando o serviço

@Injectable({
  providedIn: 'root'
})
export class ProprietarioService {
  title = "app";
  constructor(private viacep: NgxViacepService) {} // Injetando o serviço
}
export enum CEPErrorCode {
  CEP_NAO_ENCONTRADO,
  CEP_VAZIO,
  CEP_INVALIDO,
  CEP_MUITO_CURTO,
  CEP_MUITO_LONGO,
  UF_VAZIA,
  UF_MUITO_CURTA,
  UF_MUITO_LONGA,
  UF_NAO_EXISTE,
  MUNICIPIO_VAZIO,
  MUNICIPIO_MUITO_CURTO,
  LOGRADOURO_VAZIO,
  LOGRADOURO_MUITO_CURTO,
  ERRO_SERVIDOR,
}
