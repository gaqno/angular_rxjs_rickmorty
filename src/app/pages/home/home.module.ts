import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [ HomeComponent ]
})
export class LoginModule { }
