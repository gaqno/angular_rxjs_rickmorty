import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subject,  } from 'rxjs';
import { Character } from 'src/models/Character';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private dataSource = new Subject<any>();
  characters$ = this.dataSource.asObservable();
  baseUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }

  public getCharacters(page?: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/?page=${page}`).pipe(map((res: any) => {
      return res.results
    }))
  }
  public searchCharacter(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/?name=${name}`).pipe(map((res: any) => {
      return res.results
    }))
  }
  public sendData(cha: any) {
    this.dataSource.next(cha);
  }
}
