import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';

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
    this.fetchService.characters$.subscribe(
      data => { this.characters = data, console.log("PROFILE:", data)  },
    )
  }
  btnClick = () => {
    this.router.navigateByUrl('')
  }
}
