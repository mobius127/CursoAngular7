
import { Component, OnInit } from '@angular/core';

import { StarShipService } from './star-ship.service';
import { StarShip } from './star-ship';

@Component({
  selector: 'app-star-ships',
  templateUrl: './star-ships.component.html',
  styleUrls: ['./star-ships.component.scss'],
  providers: [StarShipService]
})
export class StarShipsComponent implements OnInit {

  starShipList: StarShip[];

  constructor(private service: StarShipService) { }

  ngOnInit() {
    this.service.getStarShipsFromServer().subscribe(response => this.starShipList = response);
  }

}
