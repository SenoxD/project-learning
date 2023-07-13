import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIncepatoriComponent } from './html-incepatori.component';

describe('HtmlIncepatoriComponent', () => {
  let component: HtmlIncepatoriComponent;
  let fixture: ComponentFixture<HtmlIncepatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlIncepatoriComponent]
    });
    fixture = TestBed.createComponent(HtmlIncepatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
