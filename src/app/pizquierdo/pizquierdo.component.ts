
import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

declare let L;


@Component({
  selector: 'app-pizquierdo',
  templateUrl: './pizquierdo.component.html',
  styleUrls: ['./pizquierdo.component.css']
})
export class PizquierdoComponent implements OnInit {

  title = 'cliente-operador';
 jsonMunicipio="";
 jsonCalles="";
 jsonColonias="";
 jsonPuntoInteres="";
  map;

constructor(private clienteService: GithubService) {

  }

  ngOnInit() {



    this.clienteService.getJsonMuni().subscribe(
      data=>{
        this.jsonMunicipio=data;
        console.log(this.jsonMunicipio);
      }
    );

    this.clienteService.getJsonCalles().subscribe(
      data=>{
        this.jsonCalles=data;
      //  console.log(this.jsonMunicipio);
      }
    );

    this.clienteService.getJsonColonias().subscribe(
      data=>{
        this.jsonColonias=data;
      //  console.log(this.jsonMunicipio);
      }
    );
    this.clienteService.getJsonPuntoInteres().subscribe(
      data=>{
        this.jsonPuntoInteres=data;
      //  console.log(this.jsonMunicipio);
      }
    );

;


    console.info('Entro aa panel izquierso cargare mapa ss' + this.jsonMunicipio);
     this.map= L.map('mapat').setView([20.937105, -89.661764], 13);



    var basemaps = {
      osm:  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })

    };

    var basemaps2= {
      estados: L.tileLayer.wms('http://192.168.10.80:8081/geoserver/yuc/wms?', {
          layers: 'yuc:estados',
           transparency: 'true',
           format:'image/png',
           opacity:'0.3'

      })


    };


      var overLayers = {

      estados: L.tileLayer.wms('http://192.168.10.80:8081/geoserver/yuc/wms?', {
          layers: 'yuc:estados',
           transparency: 'true',
           format:'image/png',
           opacity:'0.3'

      }),

      municipios: L.tileLayer.wms('http://192.168.10.80:8081/geoserver/yuc/wms?', {
          layers: 'yuc:municipios',
           transparent: true,
            opacity:'0.3'
      }),

      'estados, municipios': L.tileLayer.wms('http://192.168.10.80:8081/geoserver/yuc/wms?', {
        layers: 'yuc:estados,yuc:municipios',
         transparent: true,
          opacity:'0.3'
    }),
    'estadosC':L.geoJson(this.jsonMunicipio)  .addTo(this.map)



  };

L.control.layers(basemaps,overLayers,{position: 'topleft'}).addTo(this.map);

  //L.geoJson(callesjson).addTo(map);

  basemaps.osm.addTo(this.map);


  }




  public setHabilitar(){

    var myStyle = {
    ///"color": "#c7b5a5",
    "color":"black",
    "weight": 2,
    "opacity": 0.2
    };

    var myStyle2 = {
    ///"color": "#c7b5a5",
    "color":"#c7b5a5",
    "weight": 2,
    "opacity": 0.2
    };
//console.log(this.jsonMunicipio);
   L.geoJson(this.jsonMunicipio,{
     style:myStyle
   })  .addTo(this.map);

/*--
   L.geoJson(this.jsonColonias,{
     style:myStyle
   })  .addTo(this.map);


   L.geoJson(this.jsonCalles,{
     style:myStyle
   })  .addTo(this.map);

   L.geoJson(this.jsonPuntoInteres,{
     style:''
   })  .addTo(this.map);
   */


  }
}
