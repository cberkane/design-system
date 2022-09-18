import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent {

  @Output('click') click = new EventEmitter();

  public onClick(): void {
    this.click.emit();
  }
}
