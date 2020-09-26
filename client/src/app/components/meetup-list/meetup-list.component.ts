import { Component, OnInit, HostBinding } from '@angular/core';

import { MeetupsService } from '../../services/meetup.service'
 
@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent implements OnInit {

  @HostBinding('class') classes = 'row'
  meetups: any = [];

  constructor(private meetupServive: MeetupsService) { }

  ngOnInit() {
    this.getMeetups()
  }

  getMeetups() {
    this.meetupServive.getMeetups().subscribe(
      res => {
        this.meetups = res
        
      },
      err => console.error(err)
    )
  }

  deleteMeetup(id: string) {
    this.meetupServive.deleteMeetup(id).subscribe(
      res => {
        console.log(res)
        this.getMeetups()
      },
      err => console.log(err)
    )
  }

  getTemp(fecha: string, hora: string) {
    this.meetupServive.getTemp(fecha.substring(0,10), hora).subscribe(
      res => {
        console.log(res)
      
      },
      err => console.error(err)
    )
  }
} 
