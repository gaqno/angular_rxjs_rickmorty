import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [ DetailsComponent ]
})
export class DetailsModule { }
