import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MaterialModule } from "../material.module";
import { CardComponent } from "./card/card.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [CardComponent, HeaderComponent],
  exports: [CardComponent, HeaderComponent],
  imports: [
    MaterialModule,
    CommonModule
  ]
})

export class ComponentsModule { }
