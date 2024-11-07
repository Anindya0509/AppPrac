import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AgGridModule } from 'ag-grid-angular';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    FormGroup,
    FormControl,
    Validators,
    FormArray
  ],
  declarations: [],
  bootstrap: [],
  providers: []
})
export class AppModule {
  
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

