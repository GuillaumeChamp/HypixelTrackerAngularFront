import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumBodyComponent } from './museum-body.component';

describe('MuseumBodyComponent', () => {
  let component: MuseumBodyComponent;
  let fixture: ComponentFixture<MuseumBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseumBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
