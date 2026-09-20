import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  templateUrl: './exercicio14.html',
  styleUrl: './exercicio14.scss',
})
export class Exercicio14 {

  nomes: string[] = [
    'Ana',
    'Carlos',
    'Maria',
    'João',
    'Beatriz'
  ];

  produtos = [
    { nome: 'Teclado', quantidade: 5 },
    { nome: 'Mouse', quantidade: 0 },
    { nome: 'Monitor', quantidade: 3 },
    { nome: 'Headset', quantidade: 0 },
    { nome: 'Webcam', quantidade: 2 }
  ];

  somenteDisponiveis: boolean = false;

  alternarFiltro() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }
} 

