import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <my-navbar></my-navbar>
    <div class="container">
    <my-profile></my-profile>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
