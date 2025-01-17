import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BazaarItemDetailsComponent} from './bazaar-item-details.component';

describe('BazaarItemDetailsComponent', () => {
  let component: BazaarItemDetailsComponent;
  let fixture: ComponentFixture<BazaarItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazaarItemDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BazaarItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
