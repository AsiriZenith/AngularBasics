import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})

export class RenderHighlightDirective implements OnInit {

  @Input() defaultColor = 'red';
  @Input() highlightColor = 'yellow';
  @HostBinding('style.backgroundColor') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.color = 'red';
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.color = this.defaultColor;
  }

  @HostListener('click') onclick(event: Event) {
    this.color = 'yellow';
  }

}
