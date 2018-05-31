import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	lista:any[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  	this.lista= [
        { titulo:"Rick y Morty", 
         genero:"Ciencia ficción",
         temporadas:"3",
         imagen:"../../assets/imgs/Rick y Morty.jpg", 
         youtube:"wh10k2LPZiI", 
         sinopsis:"Después de haber estado desaparecido durante casi 20 años, Rick Sánchez llega de imprevisto a la puerta de la casa de su hija Beth y se va a vivir con ella y su familia utilizando el garaje como su laboratorio personal." },
        
        { titulo:"Juego de Tronos",
         genero:"Fantasia", 
         temporadas:"7",
         imagen:"../../assets/imgs/Juego de Tronos.jpg", 
         youtube:"s7L2PVdrb_8", 
         sinopsis:"Esta serie, basada en los libros de George R.R. Martin, muestra la competencia entre familias nobles de siete reinos de Westeros, cuya finalidad es ganar el control sobre el Trono de Hierro." },
        
        { titulo:"Silicon Valley",
         genero:"Comedia", 
         temporadas:"5", 
         imagen:"../../assets/imgs/Silicon Valley.jpg", 
         youtube:"4eMYiDaY3-Q", 
         sinopsis:"Richard es un tímido programador que vive con sus tres únicos amigos, que descubren un importante algoritmo que supondrá una batalla con intereses y falsas amistades. Todo ello unido a que una chica se cruza por primera vez en la vida de Richard." },
        
        { titulo:"Breaking Bad", 
         genero:"Suspense", 
         temporadas:"5", 
         imagen:"../../assets/imgs/Breaking Bad.jpg", 
         youtube:"F1HNuAE9WdU", 
         sinopsis:"Walter White un profesor de química de secundaria agobiado por problemas económicos para sostener a su familia y con un cáncer terminal, toma una decisión para ganar dinero y transforma un viejo vehículo en un laboratorio de metanfetaminas rodante." }

    ];



  }

  elegir(serie){
  	this.navCtrl.push(InfoPage, {
      serie: serie
    });
  }


  crearSerie() {
    let prompt = this.alertCtrl.create({
      title: 'Añadir serie',
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Titulo'
        },
        {
          type:'number',
          name: 'temporadas',
          placeholder: 'Nº de temporadas'
        },
        {
          name: 'genero',
          placeholder: 'Genero'
        },
        {
          name: 'imagen',
          placeholder: 'Enlace de imagen'
        },
        {
          name: 'youtube',
          placeholder: 'Id del video en youtube'
        },
        {
          name: 'sinopsis',
          placeholder: 'Sinopsis'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            this.finalizarCreacion(data);
          }
        }
      ]
    });
    prompt.present();
  }

  finalizarCreacion(data){
    if (data.titulo!="" && data.temporadas!="" && data.genero!="" && data.sinopsis!=""){
        this.lista.push(data);
    }

  }

  eliminarSerie(serie){
    const index: number = this.lista.indexOf(serie);
    this.lista.splice(index, 1);
  }
}
