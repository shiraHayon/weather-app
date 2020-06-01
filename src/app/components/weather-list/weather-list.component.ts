import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {Iweather} from '../../interface/iweather';

/*
export const weather_data: Iweather[] = [
  new IWeatherItem('London', 'RAINY', 10),
  new IWeatherItem('New York', 'SUNNY', 24),
  new IWeatherItem('Haifa', 'CLOUDY', 15)
];
*/

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
  providers: [WeatherService]
})
export class WeatherListComponent implements OnInit {
  weatherItems: Iweather[] = [];

  constructor(private _weatherService: WeatherService) {
    // this.weatherItems = this._weatherService.getWeatherItems();

  }

  ngOnInit() {
  }

  addWeatherItem(item) {
    this.weatherItems.push(item);
  }

}
