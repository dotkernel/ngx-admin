import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-app-authentication',
  template: '<router-outlet></router-outlet>',

})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    return;
  }
}
