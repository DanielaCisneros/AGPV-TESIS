import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Coordinador } from 'src/app/models/vinculacion/institucionBeneficiaria/coordinador';

@Component({
  selector: 'app-institucion-beneficiaria',
  templateUrl: './institucion-beneficiaria.component.html',
})
export class InstitucionBeneficiariaComponent implements OnInit {

  //VARIABLES FORM CONTROL
  form: FormGroup;

  //STEPS
  itemsInstBene: MenuItem[];
  activeIndexitemsInstBene: Number;

  //TABLAS
  tablaCoorInstBene: any[];
  coordinadoresInstitucion: Coordinador[] = [];
  coordinadorInstitucion: Coordinador;

  //DIALOG
  display: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.steps();
    this.tablaCoor();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombreInstitucion: [''],
      parroquia: [''],
      canton: [''],
      provincia: [''],
      ubicacion: [''],
      beneficiariosDirectos: [''],
      beneficiariosIndirectos: [''],
      nombreRepreLegal: [''],
      RucRepreLegal: [''],
      funcion: [''],
      nombreCoordinador: [''],
      cargoInstitucion: [''],
      funcionCoorComu: [''],      
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  steps() {
    this.activeIndexitemsInstBene = 0;
    this.itemsInstBene = [{
      label: 'Archivos adjuntos',
      command: (event: any) => {
        this.activeIndexitemsInstBene = 0;
      }
    },
    {
      label: 'Informacion general',
      command: (event: any) => {
        this.activeIndexitemsInstBene = 1;
      }
    },
    {
      label: 'Informacion del coordinador',
      command: (event: any) => {
        this.activeIndexitemsInstBene = 2;
      }
    },];
  }

  tablaCoor() {
    this.tablaCoorInstBene = [
      { field: 'nombreCoorInstBen', header: 'Nombre completo' },
      { field: 'cargoCoorInstBen', header: 'Cargo institución' },
      { field: 'funcionCoorComu', header: 'Funciones comunidad' },
    ]
  }

  /* 
  addCoorInstBene() {
    if (this.nombreCoorInstBen != undefined && this.cargoCoorInstBen != undefined && this.funcionCoorComu != undefined
      && this.nombreCoorInstBen.length != 0 && this.cargoCoorInstBen.length != 0 && this.funcionCoorComu.length != 0) {
      this.coordinadoresInstitucion.push(this.coordinadorInstitucion = {
        nombreCoorInstBen: this.nombreCoorInstBen,
        cargoCoorInstBen: this.cargoCoorInstBen,
        funcionCoorComu: this.funcionCoorComu,
      });
      this.nombreCoorInstBen = '';
      this.cargoCoorInstBen = '';
      this.funcionCoorComu = '';
    } else {
      alert('Porfavor complete todos campos de coordinador de institucion beneficiaria');
    }
  }
  */
}
