import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BazaarCatalogComponent} from './bazaar-catalog.component';

describe('BazaarCatalogComponent', () => {
  let component: BazaarCatalogComponent;
  let fixture: ComponentFixture<BazaarCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazaarCatalogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BazaarCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
