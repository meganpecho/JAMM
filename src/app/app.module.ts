import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { DatepickerComponent } from './datepicker/datepicker.component';
import {DailyToDoComponent} from'./components/daily-to-do/daily-to-do.component';
import { NgbdModalComponent } from './ngb-modal/modal.component';
import { NgbdDatepickerPopupComponent } from './ngb-datepicker/datepicker-popup.component';
import { NgbdTimepickerMeridianComponent } from './ngb-timepicker/timepicker-meridian.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component'

import { AuthService } from './auth/auth.service';
import { EventSesrvice } from './full-calendar/event.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    DashboardComponent,
    SidenavComponent,
    DatepickerComponent,
    DailyToDoComponent,
	NgbdModalComponent,
	NgbdDatepickerPopupComponent,
    NgbdTimepickerMeridianComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
    HttpModule,
	HttpClientModule,
    NgbModule.forRoot(),
    FullCalendarModule
  ],
  providers: [AuthService, EventSesrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
