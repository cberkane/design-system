import { Component, Input, OnInit } from '@angular/core';
import { Navlink } from '../../types/navlink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() navlinks: Navlink[];

  constructor() {}

  ngOnInit(): void {}
}
