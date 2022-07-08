import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/models/Character';
import { FetchService } from 'src/services/fetch/fetch.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
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
