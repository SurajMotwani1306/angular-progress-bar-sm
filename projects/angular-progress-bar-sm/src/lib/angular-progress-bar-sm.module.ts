import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularProgressBarSmComponent } from './angular-progress-bar-sm.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AngularProgressBarSmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    AngularProgressBarSmComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AngularProgressBarSmModule { }
