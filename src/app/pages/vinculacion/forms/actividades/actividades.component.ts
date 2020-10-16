import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from 'src/app/services/vinculacion/vinculacion-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
})
export class ActividadesComponent implements OnInit {

  //VARIABLES FORM CONTROL
  form: FormGroup;

  cities: SelectItem[];
  citiesListbox: SelectItem[];
  fraquencyOfActivities: SelectItem[];
  bondingActivities: SelectItem[];
  bondingActivitiesListbox: SelectItem[];
  linkageAxes: SelectItem[];
  linkageAxesListbox: SelectItem[];
  research_areas: SelectItem[];
  research_areasListbox: SelectItem[];
  urlcombo = "combo";

  constructor(private vinculacionService: VinculacionService,
    private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.dropdown();
    this.listbox();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      frecuenciaActiv: [''],
      actividadesVincu: [''],
      ejesEstrategicos: [''],
      areasAplicacion: [''],
      descripGeneral: [''],
    });

    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        console.log(value);
      });
  }

  dropdown() {
    this.vinculacionService.get(this.urlcombo).subscribe(
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
    this.vinculacionService.get(this.urlcombo).subscribe(
      response => {
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
