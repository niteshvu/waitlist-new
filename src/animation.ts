import { trigger, stagger, transition, animate, style, animation } from '@angular/animations'



export let fade = trigger('fade', [
    transition(':enter', [
        style({
            opacity: 0
        }),  animate(500)
    ]),
    transition(':leave', 
       [ animate(2000)])
])