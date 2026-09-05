

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Produto } from './produto/produto';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastro, Produto, Listagem],
  imports: [CommonModule, CategoriaRoutingModule],
})
export class CategoriaModule {}
