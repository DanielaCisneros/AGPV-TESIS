import {Routes} from '@angular/router';
import {ProjectsComponent} from './projects/project.component';
import {FormsComponent} from './forms/form.component'

export const HomeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
                path: 'forms',
                loadChildren: () => import('./forms/form.module').then(m => m.FormModule)
            },]
    }
];
