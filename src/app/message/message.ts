import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-message',
  imports: [BrowserAnimationsModule ],
  templateUrl: './message.html',
  styleUrl: './message.scss',
  animations: [
    trigger('fadeAnimation', [
      // Estado void: El elemento no está en el DOM.
      // Se usa para definir el estilo de partida de la animación.
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),

      // Transición :enter: Cuando el elemento se agrega al DOM.
      transition(':enter', [
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),

      // Transición :leave: Cuando el elemento se elimina del DOM.
      transition(':leave', [
        animate('500ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class Message {

}
