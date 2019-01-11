import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const pageTransition = 
    trigger('transition', [
        state('in', style({transform: 'translateY(0)', opacity: '0'})),

        transition('void => *', [
            animate(400, keyframes([
                style({transform: 'translateY(-30px)', opacity: '0', offset: 0}),
                style({transform: 'translateY(-30px)', opacity: '0', offset: 0.2}),
                style({transform: 'translateY(0px)', opacity: '1', offset: 1})
            ]))
        ])
    ]);