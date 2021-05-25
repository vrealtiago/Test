import {Injectable, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {
   constructor() {
  }
  async getLocation() {
    const request = await fetch('https://ipinfo.io/217.235.186.243?token=2ad85d144ec254')
    return await request.json();
  }
  public getPosition(): Observable<any> {
    return new Observable(obs => {

      this.getLocation().then(r => {
        console.log(r)
        const loc = r.loc.split(',');
        const pos = {
          coords: {
            latitude: loc[0],
            longitude: loc[1]
          }
        }
        obs.next(pos);
        obs.complete();
      });
      // location in localhost or https
      // navigator.geolocation.watchPosition(pos => {
      //   obs.next(pos);
      //   obs.complete();
      // }), err => {
      //     console.log('Position is not available);
      // },{
      //   enableHighAccuracy: true,
      //   maximumAge: 1000
      //   };
      });
  }
}
