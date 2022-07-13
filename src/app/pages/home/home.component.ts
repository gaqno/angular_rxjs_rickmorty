import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

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
      .subscribe((character: any) => this.fetchService.sendData(character))
  }
}