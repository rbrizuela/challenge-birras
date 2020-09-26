import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetupListComponent } from './components/meetup-list/meetup-list.component'
import { MeetupFormComponent } from './components/meetup-form/meetup-form.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/meetups',
    pathMatch: 'full'
  },
  {
    path: 'meetups',
    component: MeetupListComponent
  },
  {
    path: 'meetups/add',
    component: MeetupFormComponent
  },
  {
    path: 'meetups/edit/:id',
    component: MeetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
