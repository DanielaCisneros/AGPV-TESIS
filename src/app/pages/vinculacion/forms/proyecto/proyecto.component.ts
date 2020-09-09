import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProyectoService } from 'src/app/services/vinculacion/proyecto-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
})
export class ProyectoComponent implements OnInit {

  assignedLines: SelectItem[];

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.dropdown();
  }

  dropdown() {
    this.proyectoService.getComboPrueba().subscribe(
      response => {
        console.log(response);
        this.assignedLines = [{ label: 'Seleccione', value: '' }];
        const assignedLines = response['assignedLine'];
        assignedLines.forEach(assignedLine => {
          this.assignedLines.push({ 'label': assignedLine.name, 'value': assignedLine.id });
        });
      },
      error => {
        console.log(error);
      });
  }
}
