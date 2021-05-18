import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SearchComponent} from "./search/search.component";


const routes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home' }},
  {path: 'search', component: SearchComponent, data: { title: 'Search Apts' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
