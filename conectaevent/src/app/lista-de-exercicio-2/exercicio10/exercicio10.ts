import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.scss',
})
export class Exercicio10 {
  emPromocao: boolean = false;

  nomeProduto: string = 'Teclado';

  precoNormal: number = 120;

  precoPromocional: number = 90;

  alternarPromocao() {
    this.emPromocao = !this.emPromocao;
  }
}
