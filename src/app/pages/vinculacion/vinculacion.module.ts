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
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {FileUploadModule} from 'primeng/fileupload';
import {TableModule} from 'primeng/table';

import {StepsModule} from 'primeng/steps';


//SERVICIOS
import { VinculacionService } from '../../services/vinculacion/vinculacion-service.service'

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
        DropdownModule,
        FormsModule,
        RadioButtonModule,
        InputTextareaModule,
        CalendarModule,
        AccordionModule,
        ListboxModule,
        MultiSelectModule,
        TableModule,
        FileUploadModule,
        StepsModule,
    ],
    declarations: [
        ProjectsComponent,
    ],
    providers: [
        VinculacionService,
    ],
})
export class VinculacionModule {
}
