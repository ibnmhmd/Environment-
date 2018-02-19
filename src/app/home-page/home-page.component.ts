import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  
  ngAfterViewInit(): void {
};
viewProfile() {
  $('.modal').modal('show');
}
  constructor() { }

  viewSpeakers() {
    $('html, body').animate({
      scrollTop: $("#speakersButton").offset().top
  }, 1000);
  }
  ngOnInit() {
   window.scroll(0,0);
  }

}
