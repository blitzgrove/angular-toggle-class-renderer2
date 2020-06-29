import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild('tabExplorator') tabExplorator: ElementRef;

  constructor(private renderer: Renderer2) { }

  toggleBackground() {
    const active = this.tabExplorator.nativeElement.classList.contains('active');

    this.renderer[active ? 'removeClass' : 'addClass'](this.tabExplorator.nativeElement, 'active');
  }
}
