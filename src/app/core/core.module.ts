import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { NavigationComponent } from './components/navigation/navigation.component';



@NgModule({
  declarations: [
    RoundButtonComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RoundButtonComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
