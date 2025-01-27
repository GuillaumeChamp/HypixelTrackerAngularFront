import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumCatalogComponent } from './museum-catalog.component';

describe('MuseumCatalogComponent', () => {
  let component: MuseumCatalogComponent;
  let fixture: ComponentFixture<MuseumCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseumCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
