import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';
import { WeatherAddComponent } from './components/weather-add/weather-add.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from './modules/weather/weather.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
