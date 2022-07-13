import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interface/Character';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChildren('sentinel', { read: ElementRef }) 
  sentinel!: ElementRef;

  characters!: Array<Character>;
  constructor(
    private fetchService: FetchService,
    private router: Router,
  ) { };

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.fetchService.characters$.subscribe(
      data => {
        this.characters = data;
        console.log('CARD:', data)
      }
    )
  }
  sendCharacter(cha: Character) {
    this.router.navigate(['/details/' + cha.id])
  }
}