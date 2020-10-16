import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/vinculacion/participantes/docente';
import { Estudiante } from 'src/app/models/vinculacion/participantes/estudiante';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
})
export class ParticipantesComponent implements OnInit {

  //VARIABLES FORM CONTROL
  form: FormGroup;

  //TABLA
  tablaDoceParti: any[];
  docentesParticipantes: Docente[] = [];
  docenteParticipante: Docente;

  tablaEstuParti: any[];
  estudiantesParticipantes: Estudiante[] = [];
  estudianteParticipante: Estudiante;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.tablaDocentes();
    this.tablaEstudiantes();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      docente: [''],
      cargo: [''],
      horarioTrabajo: [''],
      funcionesDocente: [''],
      estudiante: [''],
      ciEstudiante: [''],
      funcionesEstud: [''],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  tablaDocentes() {
    this.tablaDoceParti = [
      { field: 'nombreDoceParti', header: 'Nombre docente' },
      { field: 'cargoDoceParti', header: 'Cargo docente' },
      { field: 'horarioDoceParti', header: 'Horario de trabajo' },
      { field: 'funcionDoceParti', header: 'Funciones docente' },
    ]
  }

  tablaEstudiantes() {
    this.tablaEstuParti = [
      { field: 'nombreEstuParti', header: 'Nombre estudiante' },
      { field: 'cedulaEstuParti', header: 'CI' },
      { field: 'especialidadEstuParti', header: 'Especialidad' },
      { field: 'funcionEstuParti', header: 'Funciones estudiante' },
    ]
  }

  /* 
  addDoceParti() {
    if (this.nombreDoceParti != undefined && this.cargoDoceParti != undefined && this.horarioDoceParti != undefined
      && this.funcionDoceParti != undefined && this.cargoDoceParti.length != 0 && this.horarioDoceParti.length != 0
      && this.funcionDoceParti.length != 0 && this.nombreDoceParti != 0) {
      this.docentesParticipantes.push(this.docenteParticipante = {
        nombreDoceParti: this.nombreDoceParti.name,
        cargoDoceParti: this.cargoDoceParti,
        horarioDoceParti: this.horarioDoceParti,
        funcionDoceParti: this.funcionDoceParti
      });
    } else {
      alert('Porfavor complete todos campos deocentes participantes');
    }
  }

  addEstuParti() {
    if (this.nombreEstuParti != undefined && this.funcionEstuParti != undefined
      && this.nombreEstuParti != 0 && this.funcionEstuParti.length != 0) {
      this.estudiantesParticipantes.push(this.estudianteParticipante = {
        nombreEstuParti: this.nombreEstuParti.name,
        cedulaEstuParti: '012345',
        funcionEstuParti: this.funcionEstuParti
      });
    } else {
      alert('Porfavor complete todos campos estudiantes participantes');
    }
  }*/

}
