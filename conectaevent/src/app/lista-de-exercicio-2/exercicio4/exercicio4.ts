import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: false,
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.scss',
})
export class Exercicio4 {
  nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
