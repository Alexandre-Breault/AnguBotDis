import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicescriptPHPService {

  private url = 'http://script/script.php?number=1';

  constructor(private http: HttpClient) { }
  performGetEx():Observable<any>{
    return this.http.get<any>(this.url);
}
}
