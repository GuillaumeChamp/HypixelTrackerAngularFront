import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaarItemHistoryChartComponent } from './bazaar-item-history-chart.component';

describe('BazaarItemHistoryChartComponent', () => {
  let component: BazaarItemHistoryChartComponent;
  let fixture: ComponentFixture<BazaarItemHistoryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazaarItemHistoryChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazaarItemHistoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
