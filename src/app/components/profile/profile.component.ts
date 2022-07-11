import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FetchService } from 'src/services/fetch/fetch.service';

@Component({
  selector: 'profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  characters: any;
  constructor(
    private fetchService: FetchService,
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
  btnClick = () => {
    this.router.navigateByUrl('')
  }
}
