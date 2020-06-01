import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


/*const WEATHER_DATA: IWeatherItem[] = [
  new IWeatherItem('London', 'RAINY', 10),
  new IWeatherItem('New York', 'SUNNY', 24),
  new IWeatherItem('Haifa', 'CLOUDY', 15)
];*/

@Injectable()

export class WeatherService {

  constructor(private _http: HttpClient) {
  }

  getWeatherItems() {
    // return WEATHER_DATA;
  }

  getLocationInfo(cityName): Observable<any> {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';
    return this._http.get(url + cityName);
  }

  getForecast(woeid: number): Observable<any> {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';
    return this._http.get(url + woeid);
  }
}
