import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/models/Character';
import { FetchService } from 'src/services/fetch/fetch.service';
import { ObservableService } from 'src/services/observable/observable.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() { }
  ngOnInit(): void {}
}