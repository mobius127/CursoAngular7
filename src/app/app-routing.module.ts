import { FederationWorldsComponent } from './components/federation-worlds/federation-worlds.component';
import { StarShipsComponent } from './components/star-ships/star-ships.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnelComponent } from './components/personnel/personnel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'star-ships',
    component: StarShipsComponent
  },
  {
    path: 'personnel',
    component: PersonnelComponent
  },
  {
    path: 'worlds',
    component: FederationWorldsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
