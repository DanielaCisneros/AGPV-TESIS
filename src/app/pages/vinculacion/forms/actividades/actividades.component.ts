import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProyectoService } from 'src/app/services/vinculacion/proyecto-service.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
})
export class ActividadesComponent implements OnInit {

  cities: SelectItem[];
  citiesListbox: SelectItem[];
  fraquencyOfActivities: SelectItem[];
  bondingActivities: SelectItem[];
  bondingActivitiesListbox: SelectItem[];


  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.dropdown();
    this.listbox();
  }

  dropdown() {
    this.proyectoService.getComboPrueba().subscribe(
      response => {
        this.fraquencyOfActivities = [{ label: 'Seleccione', value: '' }];
        const fraquencyOfActivities = response['fraquencyOfActivity'];
        fraquencyOfActivities.forEach(mode => {
          this.fraquencyOfActivities.push({ 'label': mode.name, 'value': mode.id });
        });
      },
      error => {
        console.log(error);
      });
  }

  listbox() {
    this.proyectoService.getComboPrueba().subscribe(
      response => {
        this.bondingActivities = [{ label: 'Seleccione', value: '' }];
        const bondingActivities = response['bondingActivities'];
        bondingActivities.forEach(bondingActivity => {
          this.bondingActivities.push({ 'label': bondingActivity.name, 'value': bondingActivity.id });
        });

        this.bondingActivitiesListbox = this.bondingActivities.slice(1);
      },
      error => {
        console.log(error);
      });
  }
}
