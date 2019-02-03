import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingBackComponent } from './giving-back.component';

describe('GivingBackComponent', () => {
  let component: GivingBackComponent;
  let fixture: ComponentFixture<GivingBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivingBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivingBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
