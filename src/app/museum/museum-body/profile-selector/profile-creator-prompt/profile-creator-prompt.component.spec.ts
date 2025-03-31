import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreatorPromptComponent } from './profile-creator-prompt.component';

describe('ProfileCreatorPromptComponent', () => {
  let component: ProfileCreatorPromptComponent;
  let fixture: ComponentFixture<ProfileCreatorPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCreatorPromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCreatorPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
