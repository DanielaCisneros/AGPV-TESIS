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

import { from } from 'rxjs';

//COMPONENTES
import { FormRoutes } from './form.routing';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FormsComponent } from './form.component';
import { EstadoAcademicoComponent } from './estado-academico/estado-academico.component';
import { InstitucionBeneficiariaComponent } from './institucion-beneficiaria/institucion-beneficiaria.component';
import { ContextualizacionComponent } from './contextualizacion/contextualizacion.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { CronogramasComponent } from './cronogramas/cronogramas.component';

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
        EstadoAcademicoComponent,
        InstitucionBeneficiariaComponent,
        ContextualizacionComponent,
        ParticipantesComponent,
        ActividadesComponent,
        CronogramasComponent,
    ],
    providers: [
    ],
})
export class FormModule {
}
