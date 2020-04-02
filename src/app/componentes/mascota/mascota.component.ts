import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObjetoEj } from 'src/app/clases/objeto-ej';


@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  @Output() turno = new EventEmitter<any>();
  @Input() ObjetoEj:ObjetoEj;
  

  constructor() { }

  ngOnInit(): void {
  }
  click(){
    console.log('Evento click');
    this.turno.emit(this.ObjetoEj.nombre);
  }
}
