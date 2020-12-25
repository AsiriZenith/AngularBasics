import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appAlternateIf]',
})
export class AlternateIfDirective implements OnInit {

    @Input() appAlternateIf: boolean;

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

    ngOnInit(): void {
        if (this.appAlternateIf) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

}