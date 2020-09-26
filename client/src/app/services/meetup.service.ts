import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Meetup } from '../models/Meetup'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {

  API_URI = 'http://localhost:8000/api'

  constructor(private http: HttpClient) {}

  getMeetups() {
    return this.http.get(`${this.API_URI}/meetups`) 
  }

  getMeetup(id: string) {
    return this.http.get(`${this.API_URI}/meetups/${id}`) 
  }

  saveMeetup(meetup: Meetup) {
    return this.http.post(`${this.API_URI}/meetups`, meetup) 
  }

  updateMeetup(id: string|number, updatedMeetup: Meetup): Observable<Meetup> {
    return this.http.put (`${this.API_URI}/meetups/${id}`, updatedMeetup) 
  }

  deleteMeetup(id: string) {
    return this.http.delete(`${this.API_URI}/meetups/${id}`) 
  }

  getTemp(fecha: string, hora: string) {
    return this.http.get(`${this.API_URI}/temp?fecha=${fecha}&hora=${hora}`) 
  }

}
