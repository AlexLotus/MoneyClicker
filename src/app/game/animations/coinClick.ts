import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const coinClick = 
trigger('coinClick', [
    state('clicked', style({
        transform: 'scale(1)'
    })),
    transition('* => clicked', [
        animate('100ms ease-in-out', keyframes([
            style({transform: 'scale(1)', offset: 0}),
            style({transform: 'scale(1.10)', offset: 1})
        ]))
    ])
]);
