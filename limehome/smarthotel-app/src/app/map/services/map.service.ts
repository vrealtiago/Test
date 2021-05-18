import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  public getPosition(): Observable<any> {
    return new Observable(obs => {
        navigator.geolocation.getCurrentPosition(pos => {
          obs.next(pos);
          obs.complete();
        }), err => {
            console.log('Position is not available');
        },{
            enableHighAccuracy: true
          };
      });
  }
}
