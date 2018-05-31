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
  	this.serie = navParams.get('serie');
  	this.url="https://www.youtube.com/embed/"+this.serie.youtube;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

	
}
