import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHTMLComponent } from './pagina-html.component';

describe('PaginaHTMLComponent', () => {
  let component: PaginaHTMLComponent;
  let fixture: ComponentFixture<PaginaHTMLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaHTMLComponent]
    });
    fixture = TestBed.createComponent(PaginaHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
