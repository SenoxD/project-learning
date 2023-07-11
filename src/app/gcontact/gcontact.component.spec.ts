import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcontactComponent } from './gcontact.component';

describe('GcontactComponent', () => {
  let component: GcontactComponent;
  let fixture: ComponentFixture<GcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GcontactComponent]
    });
    fixture = TestBed.createComponent(GcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
