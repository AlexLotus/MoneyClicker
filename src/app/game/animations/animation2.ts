import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const pageTransition2 = 
    trigger('transition2', [
        state('doIt', style({ opacity: '0', display: 'none'})),
        state('entry', style({ opacity: '1'})),

        transition('* => doIt', [
            animate(3000, keyframes([
                style({ opacity: '1', offset: 0}),
                style({opacity: '1', offset: 0.8}),
                style({ opacity: '0', offset: 1})
            ]))
        ])
    ]);