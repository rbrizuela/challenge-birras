import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MeetupFormComponent } from './components/meetup-form/meetup-form.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';

import { MeetupsService } from './services/meetup.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MeetupFormComponent,
    MeetupListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MeetupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
