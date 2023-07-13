import {
  Component,
  HostListener,
  Renderer2,
  Inject,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  private scrollStarted = false;

  constructor(
    private renderer: Renderer2,
    @Inject(ElementRef) private elementRef: ElementRef
  ) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log('Scroll event triggered');

    const aboutElement =
      this.elementRef.nativeElement.querySelector('.about-page');
    const aboutHeight = aboutElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (
      !this.scrollStarted &&
      scrollPosition + windowHeight >= aboutHeight / 2
    ) {
      this.scrollStarted = true;
      this.startAutomaticScroll();
    }
  }

  private startAutomaticScroll(): void {
    const scrollHeight = document.body.scrollHeight;
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' });

    setTimeout(() => {
      // Reset the scroll flag to repeat the behavior
      this.scrollStarted = false;
    }, 1000);
  }
}
