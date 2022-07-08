import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { CharacterDetailsComponent } from './character-details.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [ CharacterDetailsComponent ]
})
export class CharacterDetailsModule { }
