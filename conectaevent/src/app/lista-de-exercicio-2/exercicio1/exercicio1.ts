import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: false,
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.scss',
})
export class Exercicio1 {
  mensagemVisivel: boolean = false;
  
  mostrarOuOcultarMensagem() {
  this.mensagemVisivel = !this.mensagemVisivel;
}
}
