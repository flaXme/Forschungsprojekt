import { AfterViewInit, Component, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map;
  defaultla: number = 48.6674;
  defaultlng: number = 9.2445;
  @Input() nothinguploaded: boolean;
  @Input() test: string='unchanged'; //this variable receives information from appcomponent

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    
  }
  

   readGeoJson(): void {
    if(!(this.nothinguploaded)){
      alert('you have to upload a file first');
    }else{
      console.log('Mapping loaded');
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.defaultla, this.defaultlng],
      zoom: 20
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


}
