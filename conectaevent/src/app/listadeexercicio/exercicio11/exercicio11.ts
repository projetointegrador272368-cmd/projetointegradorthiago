import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss'
})
export class Exercicio11 {

  produto: string = 'Mouse Gamer';
  preco: number = 120;
  quantidade: number = 1;

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarCarrinho() {
    alert('Adicionado ao carrinho: ' + this.quantidade + 'x ' + this.produto);
  }

}
