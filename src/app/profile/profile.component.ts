import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload, UserDetails } from '../authentication_service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: UserDetails

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.details = this.auth.getUserDetails()
  }

}
