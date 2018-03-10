import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  safeURL: any = '';
  videoURL = 'http://www.youtube.com/embed/dP15zlyra3c';
  ngAfterViewInit(): void {
    
}

constructor( private _sanitizer: DomSanitizer) {
  this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
}

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

   window.scroll( 0, 0 );
   
  }

}
