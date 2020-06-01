import {Component, Input, OnInit} from '@angular/core';
import {Iweather} from '../../interface/iweather';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem: Iweather;

  constructor() {
  }

  ngOnInit() {
  }
}
