import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { ChartModule } from 'angular-highcharts';
=======
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 54b9b15b7c8a8a56c62803a067dc2aabd73ed083

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
<<<<<<< HEAD
import { ChartComponent } from './chart/chart.component';

=======
import { EventSesrvice } from './full-calendar/event.service';
>>>>>>> 54b9b15b7c8a8a56c62803a067dc2aabd73ed083

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    DashboardComponent,
    SidenavComponent,
<<<<<<< HEAD
    ChartComponent
=======
	NgbdModalComponent,
	NgbdDatepickerPopupComponent,
    NgbdTimepickerMeridianComponent,
    FullCalendarComponent
>>>>>>> 54b9b15b7c8a8a56c62803a067dc2aabd73ed083
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
<<<<<<< HEAD
    ChartModule
=======
	HttpClientModule,
    NgbModule.forRoot(),
    FullCalendarModule
>>>>>>> 54b9b15b7c8a8a56c62803a067dc2aabd73ed083
  ],
  providers: [AuthService, EventSesrvice],
  bootstrap: [AppComponent]
})
export class AppModule {}
