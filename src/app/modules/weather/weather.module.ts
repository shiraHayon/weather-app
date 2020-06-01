import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { WeatherListComponent } from '../../components/weather-list/weather-list.component';
import { WeatherItemComponent } from '../../components/weather-item/weather-item.component';
import { WeatherAddComponent } from '../../components/weather-add/weather-add.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    WeatherListComponent,
    WeatherItemComponent,
    WeatherAddComponent],
  exports: [
      WeatherListComponent,
      WeatherItemComponent,
      WeatherAddComponent]
})
export class WeatherModule { }
