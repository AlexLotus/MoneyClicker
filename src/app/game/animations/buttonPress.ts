import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const menuOpenButton = 
trigger('menuButton', [
    state('clicked', style({
        transform: 'scale(1)'
    })),
    transition('* => clicked', [
        animate('200ms ease-out', keyframes([
            style({transform: 'scale(1)', offset: 0}),
            style({transform: 'scale(1.15)', offset: 1})
        ]))
    ])
]);
