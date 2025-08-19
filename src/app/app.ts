import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './message/message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Message],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'slider2';
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}

