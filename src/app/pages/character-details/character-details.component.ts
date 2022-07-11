import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Character } from 'src/models/Character';
import { FetchService } from 'src/services/fetch.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  constructor(private fetchService: FetchService) { }
  ngOnInit(): void {}
  
}
