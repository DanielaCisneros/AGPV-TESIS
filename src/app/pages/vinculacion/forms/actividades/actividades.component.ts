import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from 'src/app/services/vinculacion/vinculacion-service.service';

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
  linkageAxes: SelectItem[];
  linkageAxesListbox: SelectItem[];
  research_areas: SelectItem[];
  research_areasListbox: SelectItem[];

  constructor(private vinculacionService: VinculacionService) { }

  ngOnInit(): void {
    this.dropdown();
    this.listbox();
  }

  dropdown() {
    this.vinculacionService.get().subscribe(
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
    this.vinculacionService.get().subscribe(
      response => {
        console.log(response);
        this.bondingActivities = [{ label: 'Seleccione', value: '' }];
        this.linkageAxes = [{ label: 'Seleccione', value: '' }];
        this.research_areas = [{ label: 'Seleccione', value: '' }];
        const bondingActivities = response['bondingActivities'];
        const linkageAxes = response['linkageAxes'];
        const research_areas = response['research_areas'];
        bondingActivities.forEach(bondingActivity => {
          this.bondingActivities.push({ 'label': bondingActivity.name, 'value': bondingActivity.id });
        });
        linkageAxes.forEach(linkageAxe => {
          this.linkageAxes.push({ 'label': linkageAxe.name, 'value': linkageAxe.id });
        });
        research_areas.forEach(research_area => {
          this.research_areas.push({ 'label': research_area.name, 'value': research_area.id });
        });
        this.bondingActivitiesListbox = this.bondingActivities.slice(1);
        this.linkageAxesListbox = this.linkageAxes.slice(1);
        this.research_areasListbox = this.research_areas.slice(1);
      },
      error => {
        console.log(error);
      });
  }
}
