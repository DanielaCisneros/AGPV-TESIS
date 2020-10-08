import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../demo/service/carservice';
import { Car } from '../../../demo/domain/car';
import { SelectItem } from 'primeng/api';
import { VinculacionService } from '../../../services/vinculacion/vinculacion-service.service'

@Component({
    selector: 'app-vinculacion-project',
    templateUrl: './project.component.html',
})
export class ProjectsComponent implements OnInit {

    cars: Car[];
    carsLarge: Car[];
    cities: SelectItem[];
    selectedCity1: any;

    //rol = 'coordinador';
    rol = 'docente';
    //estadoProyecto = 'pendiente';
    //estadoProyecto = 'corregido'; 
    //estadoProyecto = 'culminado'; 
    //estadoProyecto = 'en proceso'; 
    estadoProyecto = 'rectificar';
    //estadoProyecto = 'aprobado';

    //URLS
    urlcombo = "project";

    constructor(private carService: CarService,
        private vinculacionService: VinculacionService,) {
    }

    ngOnInit() {
        this.vinculacionService.get(this.urlcombo).subscribe(
            response => {
                console.log(response);
            },
            error => {
              console.log(error);
            });

        this.carService.getCarsLarge().then(cars => this.carsLarge = cars);


        this.cities = [];
        this.cities.push({ label: 'Estado', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });    }
}
