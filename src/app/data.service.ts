import {  Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : Http) { 

  }
  fetchData()
  {
    return this.http.get('https://shopping-app-5fb4b.firebaseio.com/').pipe(map((response: any) => response.json()));
   
  }
}
