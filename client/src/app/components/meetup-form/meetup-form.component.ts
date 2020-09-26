import { Component, OnInit, HostBinding } from '@angular/core';
import { Meetup } from 'src/app/models/Meetup';
import { MeetupsService } from '../../services/meetup.service'
import { ActivatedRoute , Router } from '@angular/router'

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.css']
})
export class MeetupFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  meetup: Meetup = {
    id: 0,
    fecha: '',
    hora: '',
    descripcion: '',
    lugar: '',
    created_at: new Date()
  }

  edit: boolean = false

  constructor(private meetupsService: MeetupsService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    
    if (params.id) {
      this.meetupsService.getMeetup(params.id)
        .subscribe(
          res => {
            this.meetup = res
            this.meetup.fecha = this.meetup.fecha.substring(0,10)
            this.edit = true
            console.log(res)
          },
          err => console.error(err)
        )
    }
  }

  saveNewMeetup() {

    delete this.meetup.id
    delete this.meetup.created_at
    
    this.meetupsService.saveMeetup(this.meetup) 
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/meetups'])
        },
        err => console.error(err)
      )
  }

  updateMeetup() {
    
    delete this.meetup.created_at

    this.meetupsService.updateMeetup(this.meetup.id, this.meetup)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/meetups'])
        },
        err => console.error(err)
      )
  }
}
