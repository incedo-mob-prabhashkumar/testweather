import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherserviceProvider {

  private apiKey: string;
  private searchUrl: string;
  private conditionsUrl: string;
//  http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1
  constructor(public _http:HttpClient) {
    this.apiKey = 'bc6fe84469333f38faeacf68defe8a25';
    this.conditionsUrl = 'https://api.openweathermap.org/data/2.5/weather?APPID='+this.apiKey+"&id=524901&q="
    this.searchUrl = "http://localhost:8100/search/aq?query=";
  }

  getWeather(qstr) {
    return this._http.get(this.conditionsUrl+qstr)
      .map(res =>{
        console.log(res)
        return res;
      });
  }

  


}
