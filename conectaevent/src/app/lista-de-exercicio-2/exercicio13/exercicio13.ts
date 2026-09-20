import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.scss',
})
export class Exercicio13 {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Criar tela inicial',
      responsavel: 'Ana',
      prioridade: 'Alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Configurar banco de dados',
      responsavel: 'Carlos',
      prioridade: 'Média',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Testar sistema',
      responsavel: 'Maria',
      prioridade: 'Alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Criar documentação',
      responsavel: 'João',
      prioridade: 'Baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Corrigir formulário',
      responsavel: 'Beatriz',
      prioridade: 'Alta',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Publicar projeto',
      responsavel: 'Ana',
      prioridade: 'Média',
      concluida: false
    }
  ];

  alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
