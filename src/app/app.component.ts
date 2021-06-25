import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isMenuVisible: boolean = false;

  presentMenu(e) {
    this.isMenuVisible = !this.isMenuVisible;
    if (this.isMenuVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  closeMenu() {
    document.body.classList.remove('overflow-hidden');
    this.isMenuVisible = false;
  }

}
