import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./map/component/map.component";


const routes: Routes = [
  {path: '', component: MapComponent, data: { title: 'Map' }},
  {path: 'map', component: MapComponent, data: { title: 'Search Apts' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
