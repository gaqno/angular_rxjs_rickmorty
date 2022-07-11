import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject,  } from 'rxjs';
import { Character } from 'src/models/Character';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private dataSource = new Subject<any>();
  dataSource$ = this.dataSource.asObservable();
  baseUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl).pipe(map((res: any) => {
      return res.results
    }))
  }
  public getCharacter(id: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/${id}`)
  }
  public sendData(character: any) {
    this.dataSource.next(character);
  }
}
