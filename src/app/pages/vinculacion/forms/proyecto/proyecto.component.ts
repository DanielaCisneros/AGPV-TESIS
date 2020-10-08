import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from 'src/app/services/vinculacion/vinculacion-service.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
})
export class ProyectoComponent implements OnInit {

  assignedLines: SelectItem[];
  
  //URLS
  urlcombo = "combo";

  constructor(private vinculacionService: VinculacionService) { }

  ngOnInit(): void {
  }

  filterAssignedLines(event) {
    this.vinculacionService.get(this.urlcombo).subscribe(
      response => {
        this.assignedLines = [];
        const assignedLines = response['assignedLine'];
        for (const item of assignedLines) {
          const brand = item.name;
          if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
            this.assignedLines.push(brand);
          }
        }
      },
      error => {
        console.log(error);
      });
  }

}
