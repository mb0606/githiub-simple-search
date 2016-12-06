import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <my-profile></my-profile>
  `,
})
export class AppComponent  { name = 'Angular'; }
