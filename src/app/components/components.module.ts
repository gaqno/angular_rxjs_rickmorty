import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MaterialModule } from "../material.module";
import { CardComponent } from "./home/card/card.component";
import { HeaderComponent } from "./home/header/header.component";
import { ProfileComponent } from './details/profile/profile.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    ProfileComponent
  ],
  exports: [
    CardComponent,
    HeaderComponent,
    ProfileComponent],
  imports: [
    MaterialModule,
    CommonModule
  ]
})

export class ComponentsModule { }
