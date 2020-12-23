import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})

export class RenderHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('click') onclick(event: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }

}
