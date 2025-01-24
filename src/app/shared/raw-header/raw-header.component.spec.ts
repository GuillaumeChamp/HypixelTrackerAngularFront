import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawHeaderComponent } from './raw-header.component';

describe('RawHeaderComponent', () => {
  let component: RawHeaderComponent;
  let fixture: ComponentFixture<RawHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
