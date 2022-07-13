import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, of } from 'rxjs';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  apiResponse: any;
  isSearching: boolean = false;
  isError: boolean = false;
  characters: string[] = [];
  constructor(private fetchService: FetchService) {  }
  ngOnInit(): void {
     fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , filter(res => res.length > 2)
      , debounceTime(1000)
      , distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;
      this.searchGetCall(text).subscribe((res) => {
        this.isSearching = false;
        this.fetchService.sendData(res)
      }, (err) => {
        this.isSearching = false;
      });
    });
  }

  searchGetCall(text: string) {
  if (text === '') {
    return of([]);
  }
  return this.fetchService.searchCharacter(text);
}
  getData() {
  return this.fetchService.characters$.subscribe(
    data => { this.characters =  data }
    )
  }
}