import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
})
export class ObservacionesComponent implements OnInit {

  rol = 'coordinador';
  //rol = 'docente';
  observacionEditable: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.rol == 'docente') {
      this.observacionEditable = true;
    } else { 
      this.observacionEditable = false;
    }
  }
}
