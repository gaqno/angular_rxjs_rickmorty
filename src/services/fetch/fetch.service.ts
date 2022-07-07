import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { ICharacter } from 'src/models/Character';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private dataStringSource = new Subject<string>();
  dataString$ = this.dataStringSource.asObservable();
  baseUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  public setData(value: any) {
    this.dataStringSource.next(value);
  }
  public getCharactersById(id: number): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(`${this.baseUrl}/${id}`).pipe(map((res: any) => {
      return res.results
    }))
  }
  public getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.baseUrl).pipe(map((res: any) => {
      return res.results
    }))
  }
}

