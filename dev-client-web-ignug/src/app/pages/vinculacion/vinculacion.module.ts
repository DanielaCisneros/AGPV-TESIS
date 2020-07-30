import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from './projects/project.component';
import {FormsComponent} from './forms/form.component'
import {HomeRoutes} from './vinculacion.routing';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes),
        DataViewModule,
        PanelModule,
        InputTextModule,
        ButtonModule,
        TabViewModule,
    ],
    declarations: [
        ProjectsComponent,
        FormsComponent,
    ]
})
export class VinculacionModule {
}
