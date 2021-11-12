import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRubr } from '../irubr';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  constructor() { }

  nome: string = '';
  cognome: string = '';
  citta: string = '';

  // @Input() rubrica!: IRubr;

  @Output() AddNameX = new EventEmitter();

  createList () {

    let obj: IRubr = {
      nome: this.nome,
      cognome: this.cognome,
      citta: this.citta
    }

    this.AddNameX.emit(obj)

    let input1 = <HTMLInputElement>document.getElementById("input1");
    input1.value = '';
    let input2 = <HTMLInputElement>document.getElementById("input2");
    input2.value = '';
    let input3 = <HTMLInputElement>document.getElementById("input3");
    input3.value = '';
  }

  ngOnInit(): void {
  }

}
