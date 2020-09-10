import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from '../../../../services/vinculacion/vinculacion-service.service'

@Component({
  selector: 'app-estado-academico',
  templateUrl: './estado-academico.component.html',
})
export class EstadoAcademicoComponent implements OnInit {

  //COMBOS
  modes: SelectItem[];
  careers: SelectItem[];

  //FECHAS
  fechaInicio: Date;
  fechaFinal: Date;
  plazo: any;

  constructor(private vinculacionService: VinculacionService) { }

  ngOnInit(): void {
    this.dropdown();
  }

  dropdown() {
    this.vinculacionService.getComboPrueba().subscribe(
      response => {
        this.modes = [{ label: 'Seleccione', value: '' }];
        this.careers = [{ label: 'Seleccione', value: '' }];
        const modes = response['mode'];
        const carrers = response['career'];
        modes.forEach(mode => {
          this.modes.push({ 'label': mode.name, 'value': mode.id });
        });
        carrers.forEach(carrer => {
          this.careers.push({ 'label': carrer.name, 'value': carrer.id });
        });
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
