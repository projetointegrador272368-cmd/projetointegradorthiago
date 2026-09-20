import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.scss',
})
export class Exercicio12 {
  nome: string = '';
  quantidade: number = 0;

  produtos: string[] = [];

  mensagemErro: string = '';

  adicionarProduto() {
    if (this.nome.trim() === '' || this.quantidade <= 0) {
      this.mensagemErro = 'Preencha o nome e informe uma quantidade válida.';
      return;
    }

    for (let i = 0; i < this.quantidade; i++) {
      this.produtos.push(this.nome);
    }

    this.nome = '';
    this.quantidade = 0;
    this.mensagemErro = '';
  }

  limparCampos() {
    this.nome = '';
    this.quantidade = 0;
    this.mensagemErro = '';
  }

  excluirProduto(index: number) {
    this.produtos.splice(index, 1);
  }
}