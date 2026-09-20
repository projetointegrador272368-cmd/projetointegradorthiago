import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss',
})
export class Exercicio11 {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 120,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 0
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 900,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 200,
      quantidade: 0
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 250,
      quantidade: 2
    }
  ];

  alternarFiltro() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
}
