import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular-highcharts';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbdModalComponent } from './ngb-modal/modal.component';
import { NgbdDatepickerPopupComponent } from './ngb-datepicker/datepicker-popup.component';
import { NgbdTimepickerMeridianComponent } from './ngb-timepicker/timepicker-meridian.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component'

import { AuthService } from './auth/auth.service';
import { ChartComponent } from './chart/chart.component';

import { EventService } from './full-calendar/event.service';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    DashboardComponent,
    SidenavComponent,
    ChartComponent,
	NgbdModalComponent,
	NgbdDatepickerPopupComponent,
    NgbdTimepickerMeridianComponent,
    FullCalendarComponent,
    CalendarModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    ChartModule,
	HttpClientModule,
    NgbModule.forRoot(),
    FullCalendarModule
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
