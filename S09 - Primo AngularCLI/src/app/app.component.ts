import { Component } from '@angular/core';
import { IRubr } from './irubr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'Settimana09';

  rubrica: IRubr[];


  index = 2;

  constructor() {

    this.rubrica = [
      { id: 1, nome: 'Cristian A.', cognome: 'Liguori', citta: 'Bari' },
      { id: 2, nome: 'Umberto', cognome: 'Emanuele', citta: 'Latina' }
    ];

    let RubrSalva = localStorage.getItem('RubrSalva');
    let IndexSalva = localStorage.getItem('IndexSalva');
    
    if (typeof IndexSalva == 'string') {
      this.index = parseInt(IndexSalva);
    }
    console.log(IndexSalva)
    console.log(this.index)


    if (RubrSalva != null) {
      let RubrSalvaP = JSON.parse(RubrSalva);
      console.log(RubrSalvaP)
      this.rubrica = RubrSalvaP;
    }
  }

  AddNameX(obj: IRubr): void {
    obj.id = ++this.index;
    this.rubrica.push(obj);
    console.log(this.index)
  }

  removeName = (obj: IRubr): void => {
    let index = this.rubrica.indexOf(obj)
    this.rubrica.splice(index, 1)
    console.log(this.index)
  }

  selectNameE = (obj: IRubr): void => {
    alert(obj.nome)
  }

  modificaName = (obj: IRubr): void => {

    let user = this.rubrica.find(user => user.id == obj.id);
    Object.assign(user, obj)
  }

  salvaLista = (): void => {
    localStorage.setItem('RubrSalva', JSON.stringify(this.rubrica));
    localStorage.setItem('IndexSalva', JSON.stringify(this.index));
  }

}


