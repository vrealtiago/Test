import { Component, OnInit } from '@angular/core';
import {MapService} from "../services/map.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  markers = [
    {
      id: 'hotelA',
      lat: 48.132323,
      lng: 11.578362,
      isOpen: false
    },
    {
      id: 'hotelB',
      lat:  48.128323,
      lng: 11.574362,
      isOpen: false
    },
    {
      id: 'hotelC',
      lat:  48.132323,
      lng: 11.578362,
      isOpen: false
    }
  ];
  lastInfoWin;
  markersSelectedId = '';
  zoom: number = 15;
  coordinates = {
    latitude:  48.130323,
    longitude: 11.576362
  };
  constructor(private mapService: MapService) {  }

  ngOnInit(): void {
    this.mapService.getPosition().subscribe((pos: any) => {
        this.coordinates = {
          latitude:  +(pos.coords.latitude),
          longitude: +(pos.coords.longitude)
        };
        this.setMarkersPosition();
      });
  }

  clickedMarker(id: string, index: number, info: any) {
    if(this.markersSelectedId !== id && this.markersSelectedId !== '') {
      this.markers.find(m => m.id == this.markersSelectedId).isOpen = false;
    }
    this.markersSelectedId = id;
    this.markers[index].isOpen = true;

    if (this.lastInfoWin) {
      this.lastInfoWin.close();
    }
    this.lastInfoWin = info;
  }
  closeInfoWindow(id){
    const marker = this.markers.find(m => m.id == id )
    marker.isOpen = false;
  }


  setMarkersPosition() {
    this.markers.forEach((m, index) => {
      const random = +('0.00'.concat((Math.floor(Math.random() * 100) + 5).toString()));
      this.markers[index].lat = this.coordinates.latitude - random;
      this.markers[index].lng = this.coordinates.longitude - random;
    });
  }
}
