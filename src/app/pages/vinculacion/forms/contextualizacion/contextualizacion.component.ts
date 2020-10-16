import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ObjetivoEspecifico } from 'src/app/models/vinculacion/objetivos/objentivosEspecifivos';

@Component({
  selector: 'app-contextualizacion',
  templateUrl: './contextualizacion.component.html',
})
export class ContextualizacionComponent implements OnInit {

  //VARIABLES FORM CONTROL
  form: FormGroup;

  //STEPS
  itemsContex: MenuItem[];
  activeIndexContex: Number;

  //TABLA
  tablaObjetivos: any[];
  objetivos: ObjetivoEspecifico[] = [];
  objetivo: ObjetivoEspecifico;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.steps();
    this.tablaObj();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      introduccion: [''],
      fundamentacion: [''],
      diagnostico: [''],
      justificaion: [''],
      ObjetivoGenereal: [''],
      indicador: [''],
      medioVerificacionGene: [''],
      objetivoEspecifico: [''],
      medioVerificacionEspe: [''],
      resultado: [''],
      actividad: [''],
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
    this.activeIndexContex = 0;
    this.itemsContex = [{
      label: 'Contextualizacion genral',
      command: (event: any) => {
        this.activeIndexContex = 0;
      }
    },
    {
      label: 'Objetivos especificos',
      command: (event: any) => {
        this.activeIndexContex = 1;
      }
    },]
  }

  tablaObj() {
    this.tablaObjetivos = [
      { field: 'detalleObjEspe', header: 'Objetivo' },
      { field: 'indicadorObjEspe', header: 'Indicador' },
      { field: 'mediosObjEspe', header: 'Medios' },
      { field: 'resultadosObjEspe', header: 'Resultados' },
      { field: 'actividadesObjEspe', header: 'Actividades' },
    ]
  }

  /* 
  addObjetivos() {
    if (this.detalleObjEspe != undefined && this.indicadorObjEspe != undefined && this.mediosObjEspe != undefined &&
      this.resultadosObjEspe != undefined && this.actividadesObjEspe != undefined && this.detalleObjEspe.length != 0 &&
      this.indicadorObjEspe.length != 0 && this.mediosObjEspe.length != 0 && this.resultadosObjEspe.length != 0 &&
      this.actividadesObjEspe.length != 0) {
      this.objetivos.push(this.objetivo = {
        detalleObjEspe: this.detalleObjEspe,
        indicadorObjEspe: this.indicadorObjEspe,
        mediosObjEspe: this.mediosObjEspe,
        resultadosObjEspe: this.resultadosObjEspe,
        actividadesObjEspe: this.actividadesObjEspe
      });
      this.detalleObjEspe = '';
      this.indicadorObjEspe = '';
      this.mediosObjEspe = '';
      this.resultadosObjEspe = '';
      this.actividadesObjEspe = '';

    } else {
      alert('Porfavor complete todos campos para objetivos especificos');
    }
  }*/

}
