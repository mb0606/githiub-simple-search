import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-navbar></my-navbar>
    <my-profile></my-profile>
  `,
})
export class AppComponent  { name = 'Angular'; }
