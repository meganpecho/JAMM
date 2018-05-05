import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DailyToDoComponent } from './components/daily-to-do/daily-to-do.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyToDoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
