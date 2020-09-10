import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from 'src/app/services/vinculacion/vinculacion-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
})
export class ProyectoComponent implements OnInit {

  assignedLines: SelectItem[];

  constructor(private vinculacionService: VinculacionService) { }

  ngOnInit(): void {
    this.dropdown();
  }

  dropdown() {
    this.vinculacionService.getComboPrueba().subscribe(
      response => {
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
