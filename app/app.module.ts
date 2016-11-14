import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { ReaderComponent } from './reader.component';



@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ AppComponent, ReaderComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
