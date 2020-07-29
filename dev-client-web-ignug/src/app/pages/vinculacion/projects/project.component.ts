import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../demo/service/carservice';
import { Car } from '../../../demo/domain/car';

@Component({
    selector: 'app-vinculacion-project',
    templateUrl: './project.component.html',
})
export class ProjectsComponent implements OnInit {

    cars: Car[];

    carsLarge: Car[];

    //rol = 'coordinador';
    rol = 'docente';


    constructor(private carService: CarService,) {
    }

    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.carsLarge = cars);
    }
}
