import { Navlink } from './core/types/navlink';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navlinks: Navlink[];

  ngOnInit(): void {
    this.navlinks = this.initNavlinks();
  }

  initNavlinks(): Navlink[] {
    return [
      { path: ['/home'], label: 'home' },
      { path: ['/gallery'], label: 'gallery' },
      { path: ['/contact'], label: 'contact' },
    ];
  }
}
