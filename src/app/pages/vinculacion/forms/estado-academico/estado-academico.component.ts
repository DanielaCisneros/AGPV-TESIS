import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from '../../../../services/vinculacion/vinculacion-service.service'

@Component({
  selector: 'app-estado-academico',
  templateUrl: './estado-academico.component.html',
})
export class EstadoAcademicoComponent implements OnInit {

  //COMBOS
  careers: SelectItem[];

  //FECHAS
  fechaInicio: Date;
  fechaFinal: Date;
  plazo: any;

  //URLS 
  urlcombo = "combo";

  constructor(private vinculacionService: VinculacionService) { }

  ngOnInit(): void {
  }

  filterAssignedLines(event) {
    this.vinculacionService.get(this.urlcombo).subscribe(
      response => {
        console.log(response);
        this.careers = [];
        const careers = response['career'];
        for (const item of careers) {
          const brand = item.name;
          if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
            this.careers.push(brand);
          }
        }
      },
      error => {
        console.log(error);
      });
  }

  calcularPlazo() {
    if (this.fechaInicio != undefined && this.fechaFinal != undefined) {
      var fechaInicio = transformDate(this.fechaInicio);
      var fechaFinal = transformDate(this.fechaFinal);
      var plazo = fechaFinal - fechaInicio;
      var meses = (plazo / (1000 * 60 * 60 * 24)) / 30;
      this.plazo = Math.trunc(meses) + ' meses';
    }
  }
}

function transformDate(date: Date) {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var stringDate = year + '-' + month + '-' + day;
  var finalDate = new Date(stringDate);
  return finalDate.getTime();
}
