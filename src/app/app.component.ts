import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'value';
  isToggled = false;
  onOptionClick(value: string) {
    this.value = value;
    this.isToggled = !this.isToggled;
  }
  toggleMenu() {
    this.isToggled = !this.isToggled;
    console.log('toggle');
  }
}
