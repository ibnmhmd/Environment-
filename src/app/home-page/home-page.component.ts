import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
}

  constructor() { }

  viewProfile () {
    localStorage.setItem( 'scrollerPosition', $(window).scrollTop() );
    setTimeout(() => {
      console.log( localStorage.getItem('scrollerPosition') );
    }, 2000);
  }
  viewSpeakers() {
    $('html, body').animate({
      scrollTop: $(' #speakersButton ').offset().top
  }, 1000);
  }
  ngOnInit() {
   console.log('pos', localStorage.getItem('scrollerPosition') );
   window.scroll( 0, 0 );
  }

}
