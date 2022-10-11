import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {carData} from "../../../interfaces/carData";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarCharService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<carData[]>{
    return this.http.get<carData[]>('http://localhost:3000/')
  }
}
