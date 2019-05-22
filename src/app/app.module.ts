import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuModule } from 'primeng/menu';
import { DataViewModule } from 'primeng/dataview';

import { MyMenuComponent } from './components/shared/my-menu/my-menu.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { FederationWorldsComponent } from './components/federation-worlds/federation-worlds.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    PersonnelComponent,
    StarShipsComponent,
    FederationWorldsComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
