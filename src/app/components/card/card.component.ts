import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/services/fetch/fetch.service';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  characters: any;
  constructor(
    private fetchService: FetchService,
    private router: Router
  ) { };
  
  ngOnInit(): void {
    this.fetchService.dataString$.subscribe(
      data => { this.characters =  data }
    )
  }

  btnClick = () => {
    this.router.navigateByUrl(`/details`)
  }
}