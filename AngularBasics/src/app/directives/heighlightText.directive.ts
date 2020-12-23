import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appHeighlightText]',
})
export class heighlightTextDirective implements OnInit {
    constructor(private element: ElementRef) {

    }
    ngOnInit(): void {
        (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') onmouseenter(event: Event) {
        (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'green';
    }

    @HostListener('mouseleave') onmouseleave(event: Event) {
        (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
    }
}