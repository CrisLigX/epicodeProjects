import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRubr } from '../irubr';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor() { }

  ModuloModifica = false;

  nameS: any;
  cognomeS: any;
  cittaS: any = 'Nessun elemento selezionato';

  nomeModificato!: IRubr;


  @Output() removeName = new EventEmitter();
  @Output() modificaName = new EventEmitter();


  @Input() rubrica!: IRubr[];

  ngOnInit(): void {
  }

  deleteTodo = (nameX: IRubr): void => {
    this.removeName.emit(nameX)
  }


  modificaTodo = (): void => {
    console.log(this.nomeModificato.id)
    this.modificaName.emit(this.nomeModificato)
    this.ModuloModifica = false;
  }

  selectTodo = (nameX: IRubr): void => {
    this.ModuloModifica = true;
    const utenteCopiato = Object.assign({}, nameX);
    this.nomeModificato = utenteCopiato;
  }

}
