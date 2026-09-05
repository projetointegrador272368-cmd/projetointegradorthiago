import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss',
})
export class Exercicio6 {

  quantidade = 0;

aumentar() {
  this.quantidade++;
}

diminuir() {
  if (this.quantidade > 0) {
    this.quantidade--;
  }
}

}
