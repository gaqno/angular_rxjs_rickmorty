import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/models/Character';
import { FetchService } from 'src/services/fetch/fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: Array<ICharacter> = [];
  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.getData();
   }

  getData(): void {
    this.fetchService
      .getCharacters()
      .subscribe(character => this.fetchService.setData(character))
  }
}