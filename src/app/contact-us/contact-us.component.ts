import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lat: number = 25.276987;
  lng: number = 55.296249;

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
