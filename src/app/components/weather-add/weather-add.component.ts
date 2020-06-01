import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Iweather} from '../../interface/iweather';
import {WeatherService} from '../../services/weather.service';
import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-weather-add',
  templateUrl: './weather-add.component.html',
  styleUrls: ['./weather-add.component.css']
})
export class WeatherAddComponent implements OnInit {
  cityName: string;
  cityDescription: string;
  cityTemperature: number;
  cityNotFound = false;

  @Output() addItem = new EventEmitter();

  constructor(private _weatherService: WeatherService) {
  }

  ngOnInit() {
  }


  submitForm() {
    this.searchForecast(this.cityName);
    /*const newCity:Iweather = {cityName: this.cityName, description: this.cityDescription, temperature: this.cityTemperature};
    this.addItem.emit(newCity);*/
  }

  searchForecast(cityName: string) {
    this.cityNotFound = false;
    this._weatherService.getLocationInfo(cityName).mergeMap(cityInfo => {
      if (!cityInfo.length) {
        this.cityNotFound = true;
      }
      return this._weatherService.getForecast(cityInfo[0].woeid);
    }).subscribe(data => {
      this.generateForecast(data);
    });

    /*this._weatherService.searchByCity(cityName)
      .subscribe(cityInfo => {
        this._weatherService.searchByWoeid(cityInfo[0].woeid).subscribe(
          (res) => {
            this.generateForecast(res);
          });
      });*/
  }

  generateForecast(cityForecast) {
    const today = (new Date()).toISOString().split('T')[0];
    let currentWeather;
    for (const forecast of cityForecast.consolidated_weather) {
      if (today === forecast.applicable_date) {
        currentWeather = forecast;
      }
    }
    const newCity: Iweather = {
      cityName: this.cityName,
      description: currentWeather.weather_state_name,
      temperature: currentWeather.max_temp
    };
    this.cityName = null;
    this.addItem.emit(newCity);
  }


  log(cityNameForm) {
    console.log(cityNameForm);

  }

}
