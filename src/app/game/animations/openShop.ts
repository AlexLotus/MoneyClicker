import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

export const openUpShop =
trigger('openUpShop', [
    state('open', style({
      opacity: '1'
    })),
    state('closed', style({
      display: 'none',
      opacity: '0'
    })),
    transition('open => closed', animate('200ms ease-out')),
    transition('closed => open', animate('200ms ease-in'))
]);