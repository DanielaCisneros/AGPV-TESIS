import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ObjetivoEspecifico } from 'src/app/models/vinculacion/objetivos/objentivosEspecifivos';

@Component({
  selector: 'app-contextualizacion',
  templateUrl: './contextualizacion.component.html',
})
export class ContextualizacionComponent implements OnInit {

  //STEPS
  itemsContex: MenuItem[];
  activeIndexContex: Number;

  //TABLA
  tablaObjetivos: any[];
  objetivos: ObjetivoEspecifico[] = [];
  objetivo: ObjetivoEspecifico;

  //NGMODEL
  detalleObjEspe: String;
  indicadorObjEspe: String;
  mediosObjEspe: String;
  resultadosObjEspe: String;
  actividadesObjEspe: String;

  constructor() { }

  ngOnInit(): void {
    this.steps();
    this.tablaObj();
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
  }

}
