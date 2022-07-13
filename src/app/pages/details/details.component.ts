import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interface/Character';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  characterId!: number;
  character!: {};
  constructor(
    private router: ActivatedRoute,
    private fetchService: FetchService
  ) { 
    this.router.params.subscribe(params => this.characterId = params['id']);
  }
  
  ngOnInit(): void {
    this.getDataById()
  }

  getDataById = () => {
    this.fetchService
      .getCharacter(this.characterId)
      .subscribe((character: any) => {
        this.fetchService.sendData(character)
      })
    console.log('detaisl')
    }
}
