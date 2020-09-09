import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProyectoService {

    constructor(private http: HttpClient) {}

    getComboPrueba() {
        return this.http.get('http://127.0.0.1:8000/api/combo');
    }
}