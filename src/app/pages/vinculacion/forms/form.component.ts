import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Coordinador } from '../../../models/vinculacion/institucionBeneficiaria/coordinador';
import { Docente } from '../../../models/vinculacion/participantes/docente';
import { Estudiante } from '../../../models/vinculacion/participantes/estudiante';
import { ObjetivoEspecifico } from '../../../models/vinculacion/objetivos/objentivosEspecifivos';
import { ProyectoService } from '../../../services/vinculacion/combos/proyectoservice'
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-vinculacion-forms',
    templateUrl: './form.component.html',
})
export class FormsComponent implements OnInit {

    cities: SelectItem[];
    citiesListbox: SelectItem[];
    carOptions: SelectItem[];

    //FECHAS
    fechaInicio: Date;
    fechaFinal: Date;
    plazo: any;

    //TABLAS
    tablaCoorInstBene: any[];
    coordinadoresInstitucion: Coordinador[] = [];
    coordinadorInstitucion: Coordinador;

    tablaDoceParti: any[];
    docentesParticipantes: Docente[] = [];
    docenteParticipante: Docente;

    tablaEstuParti: any[];
    estudiantesParticipantes: Estudiante[] = [];
    estudianteParticipante: Estudiante;

    tablaObjetivos: any[];
    objetivos: ObjetivoEspecifico[] = [];
    objetivo: ObjetivoEspecifico;

    //NGMODEL
    nombreCoorInstBen: String;
    cargoCoorInstBen: String;
    funcionCoorComu: String;

    nombreDoceParti: any;
    cargoDoceParti: String;
    horarioDoceParti: String;
    funcionDoceParti: String;

    nombreEstuParti: any;
    cedulaEstuParti: String;
    especialidadEstuParti: any;
    funcionEstuParti: String;

    detalleObjEspe: String;
    indicadorObjEspe: String;
    mediosObjEspe: String;
    resultadosObjEspe: String;
    actividadesObjEspe: String;

    //STEPS FORM
    itemsInstBene: MenuItem[];
    activeIndexitemsInstBene: Number;

    itemsContex: MenuItem[];
    activeIndexContex: Number;

    items: MenuItem[];
    activeIndex: Number;



    calcularPlazo() {
        if (this.fechaInicio != undefined && this.fechaFinal != undefined) {
            var fechaInicio = transformDate(this.fechaInicio);
            var fechaFinal = transformDate(this.fechaFinal);
            var plazo = fechaFinal - fechaInicio;
            var meses = (plazo / (1000 * 60 * 60 * 24)) / 30;
            this.plazo = Math.round(meses) + ' meses';
        }
    }

    addCoorInstBene() {
        if (this.nombreCoorInstBen != undefined && this.cargoCoorInstBen != undefined && this.funcionCoorComu != undefined
            && this.nombreCoorInstBen.length != 0 && this.cargoCoorInstBen.length != 0 && this.funcionCoorComu.length != 0) {
            this.coordinadoresInstitucion.push(this.coordinadorInstitucion = {
                nombreCoorInstBen: this.nombreCoorInstBen,
                cargoCoorInstBen: this.cargoCoorInstBen,
                funcionCoorComu: this.funcionCoorComu,
            });
        } else {
            alert('Porfavor complete todos campos de coordinador de institucion beneficiaria');
        }
    }

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
                especialidadEstuParti: 'especialidad',
                funcionEstuParti: this.funcionEstuParti
            });
        } else {
            alert('Porfavor complete todos campos estudiantes participantes');
        }
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
            })
        } else {
            alert('Porfavor complete todos campos para objetivos especificos');
        }
    }

    constructor(private proyectoService: ProyectoService) {
    }


    ngOnInit() {

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
            label: 'Ifomracion del coordinador',
            command: (event: any) => {
                this.activeIndexitemsInstBene = 2;
            }
        },];

        this.activeIndexContex = 0;
        this.itemsContex = [{
            label: 'Contextualizacion genral',
            command: (event: any) => {
                this.activeIndexitemsInstBene = 0;
            }
        },
        {
            label: 'Objetivos especificos',
            command: (event: any) => {
                this.activeIndexitemsInstBene = 1;
            }
        },]

        this.activeIndex = 0;

        this.items = [{
            label: 'Personal',
            command: (event: any) => {
                this.activeIndex = 0;
            }
        },
        {
            label: 'Seat',
            command: (event: any) => {
                this.activeIndex = 1;
            }
        },
        {
            label: 'Payment',
            command: (event: any) => {
                this.activeIndex = 2;
            }
        },
        {
            label: 'Confirmation',
            command: (event: any) => {
                this.activeIndex = 3;
            }
        }
        ];

        this.proyectoService.getComboPrueba().then(cars => console.log(cars));

        //TABLAS
        this.tablaCoorInstBene = [
            { field: 'nombreCoorInstBen', header: 'Nombre completo' },
            { field: 'cargoCoorInstBen', header: 'Cargo institución' },
            { field: 'funcionCoorComu', header: 'Funciones comunidad' },
        ]

        this.tablaDoceParti = [
            { field: 'nombreDoceParti', header: 'Nombre docente' },
            { field: 'cargoDoceParti', header: 'Cargo docente' },
            { field: 'horarioDoceParti', header: 'Horario de trabajo' },
            { field: 'funcionDoceParti', header: 'Funciones docente' },
        ]

        this.tablaEstuParti = [
            { field: 'nombreEstuParti', header: 'Nombre estudiante' },
            { field: 'cedulaEstuParti', header: 'CI' },
            { field: 'especialidadEstuParti', header: 'Especialidad' },
            { field: 'funcionEstuParti', header: 'Funciones estudiante' },
        ]

        this.tablaObjetivos = [
            { field: 'detalleObjEspe', header: 'Objetivo' },
            { field: 'indicadorObjEspe', header: 'Indicador' },
            { field: 'mediosObjEspe', header: 'Medios' },
            { field: 'resultadosObjEspe', header: 'Resultados' },
            { field: 'actividadesObjEspe', header: 'Actividades' },
        ]






        //OTRA FUNCIONALIDAD (COMBOS)
        this.cities = [];
        this.cities.push({ label: 'Estado', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

        this.citiesListbox = this.cities.slice(1);

        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'Volkswagen', value: 'Volkswagen' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
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
