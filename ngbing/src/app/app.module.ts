import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule, MapAPILoader, BingMapAPILoaderConfig,
   BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, 
   BingMapServiceFactory } from "angular-maps";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule.forRoot()
  ],
  providers: [
    {
      provide: MapAPILoader, deps: [], useFactory: MapServiceFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="..."; // your bing map key
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}