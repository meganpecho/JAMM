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
import { ChartModule } from 'angular-highcharts';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgbdModalComponent } from './ngb-modal/modal.component';
import { NgbdDatepickerPopupComponent } from './ngb-datepicker/datepicker-popup.component';
import { NgbdTimepickerMeridianComponent } from './ngb-timepicker/timepicker-meridian.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component'

import { AuthService } from './auth/auth.service';
import { ChartComponent } from './chart/chart.component';
import { TaskService } from './task/task.service';
import { EventService } from './full-calendar/event.service';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormModalComponent } from './task-form-modal/task-form-modal.component';
import { ApiService } from './core/api.service';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { TaskStatusPipe } from './task-status.pipe';
import { TaskCompletedPipe } from './task-completed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    DashboardComponent,
    SidenavComponent,
    ChartComponent,
    DatepickerComponent,
	NgbdModalComponent,
	NgbdDatepickerPopupComponent,
    NgbdTimepickerMeridianComponent,
    FullCalendarComponent,
    CalendarModalComponent,
    AboutComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    TaskListComponent,
    TaskFormModalComponent,
    TimeTrackerComponent,
    TaskStatusPipe,
    TaskCompletedPipe
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
    ChartModule,
	HttpClientModule,
    NgbModule.forRoot(),
    FullCalendarModule
  ],
  exports: [
      TaskFormModalComponent,
      TaskListComponent
  ],
  providers: [AuthService, EventService, TaskService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
