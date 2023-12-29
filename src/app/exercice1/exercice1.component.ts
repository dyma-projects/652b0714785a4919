import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  public inputName = 'text';
  public inputNameByDefault = 'Entrer votre nom';

  public number = 0;

  public doubleBinding = 'Double binding';

  constructor() {}

  ngOnInit() {}

  public incrementeNumber(): void {
    this.number++;
  }
}
