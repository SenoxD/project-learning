import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log('Scroll event triggered');
    const scrollHeight = document.body.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Calculate the middle position of the page
    const middlePosition = scrollHeight / 2;

    // If scroll position is beyond the middle, scroll to the bottom
    if (scrollTop > middlePosition) {
      window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
    }
  }
}
