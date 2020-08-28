import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
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

import { from } from 'rxjs';
import { FormRoutes } from './form.routing';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FormsComponent } from './form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FormRoutes),
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
        ProyectoComponent,
        FormsComponent,
    ],
    providers: [
    ],
})
export class FormModule {
}
