import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css'],
})
export class Exercice4Component implements OnInit {
  texts: { value: string }[] = [
    { value: 'chaine de caractere numero un' },
    { value: 'chaine de caractere numero deux' },
    { value: 'chaine de caractere numero trois' },
  ];

  constructor() {}

  ngOnInit() {}
}
