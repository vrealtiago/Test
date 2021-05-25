import {Component, OnChanges, OnInit} from '@angular/core';
import {MapService} from "../services/map.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  // fake data for markers
  markers = [
    {
      id: 'apt_Augsburg',
      lat: 48.3702735,
      lng: 10.902418,
      isOpen: false
    },
    {
      id: 'apt_Bamberg',
      lat:  49.8942282,
      lng: 10.8878785,
      isOpen: false
    },
    {
      id: 'apt_Berlin',
      lat:  52.5283758,
      lng: 13.422874,
      isOpen: false
    }
  ];
  lastInfoWin;
  markersSelectedId = '';
  zoom: number = 14;
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
      });
  }

  clickedMarker(id: string, index: number) {
    if(this.markersSelectedId !== id && this.markersSelectedId !== '') {
      this.markers.find(m => m.id == this.markersSelectedId).isOpen = false;
    }
    this.markersSelectedId = id;
    this.markers[index].isOpen = true;
  }

  changeMarker(value){
    if(value !== '') {
      const markerIndex = this.markers.findIndex(m => m.id == value);
      this.clickedMarker(value, markerIndex)
      this.centerMap(value);
    }
  }
  centerMap(marker){
    const markSelected = this.markers.find(m => m.id == marker);
    this.coordinates = {
      latitude:  markSelected.lat,
      longitude: markSelected.lng
    }
    this.zoom = 18
  }
  setZoom(event){
    this.zoom = event;
  }
}
