
import { Component, OnInit } from '@angular/core';

import { World } from './world';
import { FederationWorldsService } from './federation-worlds.service';

@Component({
  selector: 'app-federation-worlds',
  templateUrl: './federation-worlds.component.html',
  styleUrls: ['./federation-worlds.component.scss'],
  providers: [FederationWorldsService]
})
export class FederationWorldsComponent implements OnInit {

  world: World;

  worldsList: World[];

  constructor(private service: FederationWorldsService) { }

  ngOnInit() {
    this.initializeWorld();
    this.getPlanets();
  }

  saveNewWorld(): void {
    this.service.newFederationPlanet(this.world).subscribe(Response => {
      this.getPlanets();
      this.initializeWorld();
    });
  }

  clear(): void {
    this.initializeWorld();
  }

  private initializeWorld(): void {
    this.world = {
      id: 0,
      fullName: '',
      worldClass: '',
      imageUrl: ''
    };
  }

  private getPlanets(): void {
    this.service.getFederationWorldsFromServer().subscribe(response => this.worldsList = response);
  }

}
