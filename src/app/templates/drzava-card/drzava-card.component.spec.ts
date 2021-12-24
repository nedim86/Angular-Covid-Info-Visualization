import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrzavaCardComponent } from './drzava-card.component';

describe('DrzavaCardComponent', () => {
  let component: DrzavaCardComponent;
  let fixture: ComponentFixture<DrzavaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrzavaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrzavaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
