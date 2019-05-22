import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss']
})
export class MyMenuComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-plus', command: () => this.goToHome() },
      { label: 'Personal', icon: 'pi pi-fw pi-plus', command: () => this.goToPersonnel() },
      { label: 'Naves', icon: 'pi pi-fw pi-plus', command: () => this.goToStarShips() },
      { label: 'Mundos', icon: 'pi pi-fw pi-plus', command: () => this.goToWorlds() }
    ];
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToPersonnel(): void {
    this.router.navigate(['/personnel']);
  }

  goToStarShips(): void {
    this.router.navigate(['/star-ships']);
  }

  goToWorlds(): void {
    this.router.navigate(['/worlds']);
  }

}
