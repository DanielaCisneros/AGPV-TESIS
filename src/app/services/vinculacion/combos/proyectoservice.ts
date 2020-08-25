import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProyectoService {

    constructor(private http: HttpClient) {}

    getComboPrueba() {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
                    .toPromise()
                    .then(res => res as any[]);
    }
}