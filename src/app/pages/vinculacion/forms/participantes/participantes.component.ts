import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/vinculacion/participantes/docente';
import { Estudiante } from 'src/app/models/vinculacion/participantes/estudiante';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
})
export class ParticipantesComponent implements OnInit {

  //VARIABLES FORM CONTROL
  formDocente: FormGroup;
  formEstud: FormGroup;

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
    this.formDocente = this.formBuilder.group({
      docente: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      horarioTrabajo: ['', [Validators.required]],
      funcionesDocente: ['', [Validators.required]],
    });

    this.formEstud = this.formBuilder.group({
      estudiante: ['', [Validators.required]],
      ciEstudiante: ['1234567'],
      funcionesEstud: ['', [Validators.required]],
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

  addPartDocen(event: Event) {
    event.preventDefault();
      const values = this.formDocente.value;
      this.docentesParticipantes.push(this.docenteParticipante = {
        nombreDoceParti: values.docente,
        cargoDoceParti: values.cargo,
        horarioDoceParti: values.horarioTrabajo,
        funcionDoceParti: values.funcionesDocente,
      });
      this.formDocente.controls['docente'].setValue('');
      this.formDocente.controls['cargo'].setValue('');
      this.formDocente.controls['horarioTrabajo'].setValue('');
      this.formDocente.controls['funcionesDocente'].setValue('');
  }

  addPartEstud(event: Event) {
    event.preventDefault();
      const values = this.formEstud.value;
      this.estudiantesParticipantes.push(this.estudianteParticipante = {
        nombreEstuParti: values.estudiante,
        cedulaEstuParti: values.ciEstudiante,
        funcionEstuParti: values.funcionesEstud,
      });
      this.formEstud.controls['estudiante'].setValue('');
      this.formEstud.controls['ciEstudiante'].setValue('');
      this.formEstud.controls['funcionesEstud'].setValue('');
  }
}
