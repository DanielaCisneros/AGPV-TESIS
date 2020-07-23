import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from './projects/project.component';
import {FormsComponent} from './forms/form.component'
import {HomeRoutes} from './vinculacion.routing';
import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes),
    ],
    declarations: [
        ProjectsComponent,
        FormsComponent,
    ]
})
export class VinculacionModule {
}
