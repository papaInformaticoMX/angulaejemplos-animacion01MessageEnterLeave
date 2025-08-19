import { Component } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-bouncing-ball',
  imports: [],
  templateUrl: './bouncing-ball.html',
  standalone: true,
  styleUrl: './bouncing-ball.scss',
    animations: [
    trigger('bounceIn', [
      transition(':enter', [
        animate('1s', keyframes([
          style({ transform: 'translateY(-100px)', easing: 'ease-in', offset: 0 }),
          style({ transform: 'translateY(0)', easing: 'ease-out', offset: 0.5 }),
          style({ transform: 'translateY(-50px)', easing: 'ease-in', offset: 0.75 }),
          style({ transform: 'translateY(0)', easing: 'ease-out', offset: 1.0 })
        ]))
      ])
    ])
  ]
  
})
export class BouncingBall {

}
