import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BazaarHeaderComponent} from './bazaar-header.component';

describe('BazaarHeaderComponent', () => {
  let component: BazaarHeaderComponent;
  let fixture: ComponentFixture<BazaarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazaarHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BazaarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
