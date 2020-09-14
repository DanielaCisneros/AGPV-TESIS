import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class VinculacionService {

    constructor(private http: HttpClient) {}

    get() {
        return this.http.get(environment.API_URL_COMBOS);
    }
}