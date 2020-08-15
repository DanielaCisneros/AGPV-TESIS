import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Car } from '../../../demo/domain/car';
import { CarService } from '../../../demo/service/carservice';
import { Coordinador } from '../../../models/vinculacion/institucionBeneficiaria/coordinador'
import { Docente } from '../../../models/vinculacion/participantes/docente'

@Component({
    selector: 'app-vinculacion-forms',
    templateUrl: './form.component.html',
})
export class FormsComponent implements OnInit {

    cities: SelectItem[];
    selectedCity1: any;
    citiesListbox: SelectItem[];
    carOptions: SelectItem[];
    cols: any[];
    cars: Car[];
    selectedCar3: Car;




    //FECHAS
    fechaInicio: Date;
    fechaFinal: Date;
    plazo: any;

    //TABLAS
    tablaCoorInstBene: any[];
    coordinadoresInstitucion: Coordinador[] = [];
    coordinadorInstitucion: Coordinador; 

    tablaDoceParti: any[];
    DocentesParticipantes: Docente[] = [];
    DocenteParticipante: Docente;

    //NGMODEL
    nombreCoorInstBen: String;
    cargoCoorInstBen: String;
    funcionCoorComu: String;

    nombreDoceParti: any;
    cargoDoceParti: String;
    horarioDoceParti: String;
    funcionDoceParti: String;

    constructor(private carService: CarService) {
    }

    calcularPlazo (){
        if(this.fechaInicio != undefined && this.fechaFinal != undefined){
            var fechaInicio = transformDate(this.fechaInicio);
            var fechaFinal = transformDate(this.fechaFinal);
            var plazo = fechaFinal- fechaInicio;
            this.plazo = plazo/(1000*60*60*24);
        }
    }

    addCoorInstBene(){
        if (this.nombreCoorInstBen != undefined && this.cargoCoorInstBen != undefined && this.funcionCoorComu != undefined
            && this.nombreCoorInstBen.length != 0 && this.cargoCoorInstBen.length != 0 && this.funcionCoorComu.length != 0) {
            this.coordinadoresInstitucion.push(this.coordinadorInstitucion = {
                nombreCoorInstBen: this.nombreCoorInstBen,
                cargoCoorInstBen: this.cargoCoorInstBen,
                funcionCoorComu: this.funcionCoorComu,
            });
        }  else{
            alert('Porfavor complete todos campos de coordinador de institucion beneficiaria');
        } 
    }

    addDoceParti(){
        if (this.nombreDoceParti != undefined && this.cargoDoceParti != undefined && this.horarioDoceParti != undefined 
            && this.funcionDoceParti != undefined && this.cargoDoceParti.length != 0 && this.horarioDoceParti.length != 0
            && this.funcionDoceParti.length != 0 && this.nombreDoceParti != 0) {
                this.DocentesParticipantes.push(this.DocenteParticipante = {
                    nombreDoceParti: this.nombreDoceParti.name,
                    cargoDoceParti: this.cargoDoceParti,
                    horarioDoceParti: this.horarioDoceParti,
                    funcionDoceParti: this.funcionDoceParti
                });
        }  else{
            alert('Porfavor complete todos campos deocentes participantes');
        } 
        
        //console.log(this.nombreDoceParti.name);
        //console.log(this.nombreDoceParti);
    }

    

    ngOnInit() {
        //TABLE FUNCIONALIDAD
        this.carService.getCarsSmall().then((cars) => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Docente' },
            { field: 'year', header: 'Cargo' },
            { field: 'brand', header: 'Horario' },
            { field: 'color', header: 'Funciones' }
        ];

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
