import { Component, OnInit } from '@angular/core';
import { ObjetoEj } from '../../clases/objeto-ej';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  nombre: string;
  srcUtn: string;
  miLista: Array<ObjetoEj>=[];
  constructor() { }

  ngOnInit(): void {
    this.nombre="";
    this.srcUtn="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg";
  }

  public enviar():void
  {
    //this.nombre="otro";
    //console.log(event);
    this.miLista.push(new ObjetoEj(this.nombre,this.srcUtn,"tipo1"));
  }
  public sacarTurno(e)
  {
    console.log(e);
  }

  public imagen2():void
  {
    this.srcUtn="https://vignette.wikia.nocookie.net/lossimpson/images/3/3b/Little_Moe_Szyslak.png/revision/latest/top-crop/width/360/height/450?cb=20110305141014&path-prefix=es";
  }
  public imagen1():void
  {
    this.srcUtn="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg";
  }
  public imagen3():void
  {
    this.srcUtn="https://vignette.wikia.nocookie.net/kndloschicosdelbarrio/images/d/d8/No.3.gif/revision/latest?cb=20120610214046&path-prefix=es";
  }

}
