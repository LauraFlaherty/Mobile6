import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/b460bf31-1ca9-11e8-8434-196042378301")
    .map(obs => obs.json()); 
  }
}
