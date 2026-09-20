import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss',
})
export class Exercicio6 {
  nomes: string[] = [
    'Ana',
    'Carlos',
    'Maria',
    'João',
    'Beatriz'
  ];

  listaInicial: string[] = [
    'Ana',
    'Carlos',
    'Maria',
    'João',
    'Beatriz'
  ];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}