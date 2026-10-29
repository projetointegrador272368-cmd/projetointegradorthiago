import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primeriapeca7',
  standalone: false,
  templateUrl: './primeriapeca7.html',
  styleUrl: './primeriapeca7.scss',
}) 

export class Primeriapeca7 {
  @Input()
  topo = "Minha Loja Angular";
}
