import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { BioPage } from '../bio/bio';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  agregar=AgregarPage;
  bio=BioPage;
  info=InfoPage;

  libros=[{portada:"https://imagessl5.casadellibro.com/a/l/t0/55/9788484417255.jpg", titulo: "s", autor: "s", editorial:"s",res:"s"},{}]

  constructor(public navCtrl: NavController) {

  }
  clickA()
  {
    this.navCtrl.push(this.agregar,{libro:this.libros});
  }

}
