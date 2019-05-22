import { Component, OnInit } from '@angular/core';
import { PersonnelService } from './personnel.service';
import { Persona } from './persona';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss'],
  providers: [PersonnelService]
})
export class PersonnelComponent implements OnInit {

  persona: Persona;

  personaList: Persona[];

  constructor(private service: PersonnelService) { }

  ngOnInit() {
    this.initializePersona();
    this.getPersonas();
  }

  saveNewPersona(): void {
    this.service.newPersona(this.persona).subscribe(Response => {
      this.getPersonas();
      this.initializePersona();
    });
  }

  clear(): void {
    this.initializePersona();
  }

  private initializePersona(): void {
    this.persona = {
      id: 0,
      fullName: '',
      grade: '',
      imageUrl: ''
    };
  }

  private getPersonas(): void {
    this.service.getPersonasFromServer().subscribe(response => this.personaList = response);
  }

}
