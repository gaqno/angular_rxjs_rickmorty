import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Character } from 'src/models/Character';
import { FetchService } from 'src/services/fetch/fetch.service';
import { ComponentsModule } from '../components.module';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  characters!: Array<Character>;
  sub: any;
  constructor(
    private fetchService: FetchService,
    private route: ActivatedRoute,
    private router: Router
  ) { };
  ngOnInit(): void {
    this.getData()
  }
  
  getData() {
    this.fetchService.dataSource$.subscribe(
      data => { this.characters =  data }
      )
  }
  sendCharacter(cha: Character) {
    this.router.navigate(['/details/' + cha.id])
  }

}