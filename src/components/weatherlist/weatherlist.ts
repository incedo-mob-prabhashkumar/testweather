import { Component, OnInit } from '@angular/core';
import { WeatherserviceProvider } from "../../providers/weatherservice/weatherservice"
/**
 * Generated class for the WeatherlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weatherlist',
  templateUrl: 'weatherlist.html'
})
export class WeatherlistComponent implements OnInit {

  public zmw;
  public weather=[];
  public results;
  public searchStr;

  constructor(private _weatherService: WeatherserviceProvider) {
    this.results=[]
    this.searchStr = "agra";
   
  }

  ngOnInit() {
    this.getDefaultCity();
    this._weatherService.getWeather(this.searchStr)
      .subscribe(weather => {
       // this.weather = weather.current_observation;
       console.log("returned weaATHER IS",weather)
       this.weather.push(weather)
     
      });
  }

  getQuery() {
    this.results.push({"name":this.searchStr})
    this.chooseCity(this.searchStr)
  }
  

  chooseCity(city) {
    // Clear list
    this.results = [];
    if((this.searchStr.length>=3)){
      this._weatherService.getWeather(this.searchStr)
      .subscribe(weather => {
        //this.weather = weather.current_observation;
        console.log("returned weaATHER IS",weather)
        if(this.weather.length>9){
          this.weather.pop();
        }
        this.weather.push(weather)
       // this.results=this.weather.weather[0]
      });
    }
    
  }

  getDefaultCity() {
    //zmw
    this.searchStr = "agra";
  }

}
