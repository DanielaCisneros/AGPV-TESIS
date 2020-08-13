import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Car } from '../../../demo/domain/car';
import { CarService } from '../../../demo/service/carservice';

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
    fechaInicio: Date;
    fechaFinal: Date;
    plazo: any;

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

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

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

        this.cols = [
            { field: 'vin', header: 'Docente' },
            { field: 'year', header: 'Cargo' },
            { field: 'brand', header: 'Horario' },
            { field: 'color', header: 'Funciones' }
        ];
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
