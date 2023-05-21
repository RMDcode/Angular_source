import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IBatches } from './Batches';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  public URL : string="http://localhost:5100/getBatches";


  constructor(private http : HttpClient) { }

  getBatches(): Observable<IBatches[]>
  {
    return this.http.get<IBatches[]>(this.URL);
  }
}
