import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

declare var $: any ;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  route: String = '';
  constructor(private router: Router, private activedRoute: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    const self = this;
    let normalizedRoute = '';
    const offset = 250;
    const duration = 300;
        $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.navbar').css({height: '3.5rem'});
            $('.nav-item').css({padding: '0.4rem 1rem'});
            $('.navbar img').css({height: '3.5rem'});
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.navbar').css({height: 'auto'});
            $('.nav-item').css({padding: '1.2rem 1rem'});
            $('.navbar img').css({height: 'auto'});
            $('.back-to-top').fadeOut(duration);
          }
        });
        $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
      });

    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
         this.route =  this.activedRoute.snapshot['_routerState'].url;
         normalizedRoute = this.normalizeRouteName(this.route);
         if ( normalizedRoute === '') {normalizedRoute = 'Home'; }
         $('.navbar-nav li').each(function() {
           $(this).closest('ul').find('.active').removeClass('active');
           if ($(this)[0].innerText.replace(/\s+$/, '') === normalizedRoute || normalizedRoute === 'Home') {
            if ( !$(this).hasClass('active')) {
               $(this).addClass('active');
               return false;
             }
              }
          });

      }

    });
    $('.navbar-nav li').on('click', 'a', function (e) {
      if ( !$(this).closest('li').hasClass('active')) {
      $(this).closest('ul').find('.active').removeClass('active');
      $(this).closest('li').addClass('active');
     }
    });
  }

  normalizeRouteName(route) {
    if ( route ) {
      if ( route.indexOf('-') !== -1 ) {
        route = route.split('-').join(' ');
      }
    }
    return route.substr(1).toUpperCase();
  }
  ngOnInit() {
  }
 openNav() {
    document.getElementById('mySidenav').style.width = '300px';
    document.getElementById('main').style.marginLeft = '300px';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
 closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

}
