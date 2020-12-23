import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHeighlightText]',
})
export class heighlightTextDirective implements OnInit {
    constructor(private element: ElementRef) {

    }
    ngOnInit(): void {
        (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
    }
}