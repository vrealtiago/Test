import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AgmCoreModule } from "@agm/core";
import { MapComponent } from './map/component/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDp4rcAkLfFBBQ6gnHbSGRUr1gsMvPQhj8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
