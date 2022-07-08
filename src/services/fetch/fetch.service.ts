import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, reduce, Subject, throwError } from 'rxjs';
import { ICharacter } from 'src/models/Character';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private dataStringSource = new Subject<string>();
  dataString$ = this.dataStringSource.asObservable();
  baseUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.baseUrl).pipe(map((res: any) => {
      return res.results
    }))
  }
  public getCharacter(id: number): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(`${this.baseUrl}/${id}`)
  }
  public setData(value: any) {
    this.dataStringSource.next(value);
  }
}

