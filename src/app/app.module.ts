import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ShoahCommonsModule} from 'shoah-commons';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ShoahCommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
