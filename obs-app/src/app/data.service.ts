import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/d29db28e-1ca2-11e8-8434-93fadc5657f9")
    .map(obs => obs.json()); 
  }
}
