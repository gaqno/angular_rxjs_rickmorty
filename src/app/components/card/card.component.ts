import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/models/Character';
import { FetchService } from 'src/services/fetch/fetch.service';
import { ObservableService } from 'src/services/observable/observable.service';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  characters: any;
  constructor(private fetchService: FetchService) {};
  
  ngOnInit(): void {
    this.fetchService.dataString$.subscribe(
      data => { this.characters =  data }
    )
  }
}