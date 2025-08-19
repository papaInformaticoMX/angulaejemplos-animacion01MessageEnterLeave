import { Component } from '@angular/core';
import { Message } from './message/message';
import { CommonModule } from '@angular/common';

import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { BouncingBall } from './bouncing-ball/bouncing-ball';


@Component({
  selector: 'app-root',
  imports: [Message, CommonModule, BouncingBall ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
   animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }), // Estado inicial para la salida
        animate('1500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class App {
  protected title = 'slider2';
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }

  showBall = false;

  toggleBall() {
    this.showBall = !this.showBall;
  }
}

