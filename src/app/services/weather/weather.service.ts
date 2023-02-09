import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { City } from "@interfaces/city.interface";
import { WeatherCondition } from "@interfaces/weather-condition";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  private readonly apiKey: string = "5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b";
  private readonly weatherURL: string =
    "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) {}

  public getWeather(city: City): Observable<WeatherCondition> {
    return this.http.get<WeatherCondition>(this.weatherURL, {
      params: {
        id: city.id,
        appid: this.apiKey,
      },
    });
  }

  public getIcon(key: string): Observable<any> {
    return this.http.get<any>(`http://openweathermap.org/img/wn/${key}@2x.png`);
  }
}
