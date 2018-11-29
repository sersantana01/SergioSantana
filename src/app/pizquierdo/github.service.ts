
import { Injectable } from '@angular/core';
import {of ,Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(  {
  providedIn: 'root'
})
export class GithubService {
  public geo_json_data;
  private urlJsonMunicipi: string = 'http://raw.githubusercontent.com/sersantana01/IntegracionesMicrosServices/master/municipios.geojson';
  private urrJsonCalles: string = 'http://raw.githubusercontent.com/sersantana01/IntegracionesMicrosServices/master/calles.geojson';

  private urrJsonColonias: string = 'http://raw.githubusercontent.com/sersantana01/IntegracionesMicrosServices/master/colonias.geojson';

  private urlJsonPuntoInteres: string = 'http://raw.githubusercontent.com/sersantana01/IntegracionesMicrosServices/master/puntointeres.geojson';


   constructor(private http: HttpClient) { }



  public getJsonMuni():Observable<any>{

  return   this.http.get(this.urlJsonMunicipi);


  }


  public getJsonCalles():Observable<any>{

  return   this.http.get(this.urrJsonCalles);


  }

  public getJsonColonias():Observable<any>{

  return   this.http.get(this.urrJsonColonias);


  }

  public getJsonPuntoInteres():Observable<any>{

  return   this.http.get(this.urlJsonPuntoInteres);


  }


}
