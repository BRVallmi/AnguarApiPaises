import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPaisesComponent } from './info-paises/info-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesApiService } from './paises-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaisesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
