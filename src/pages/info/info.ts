import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	serie:any;
	url:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
//recivir informacion
  	this.serie = navParams.get('serie');
  //crear la direccion del video
	this.url="https://www.youtube.com/embed/"+this.serie.youtube;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

	
}
