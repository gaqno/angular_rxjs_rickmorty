import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { CharacterDetailsComponent } from './character-details.component';

const route: Route[] = [
  { path: 'details', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild( route ),
    CommonModule,
  ],
  declarations: [ CharacterDetailsComponent ]
})
export class CharacterDetailsModule { }
