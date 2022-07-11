import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Character } from 'src/models/Character';
import { FetchService } from 'src/services/fetch/fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.setData();
   }

  setData(): void {
    this.fetchService
      .getCharacters()
      .subscribe(character => this.fetchService.sendData(character))
  }
}