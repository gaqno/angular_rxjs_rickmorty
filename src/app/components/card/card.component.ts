import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Character } from 'src/models/Character';
import { FetchService } from 'src/services/fetch.service';
import { ComponentsModule } from '../components.module';

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
        console.log(data)
      }
    )
  }
  sendCharacter(cha: Character) {
    this.router.navigate(['/details/' + cha.id])
  }
}