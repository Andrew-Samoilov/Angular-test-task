import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChecker } from './password-checker.component';

describe('HomeComponent', () => {
  let component: PasswordChecker;
  let fixture: ComponentFixture<PasswordChecker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordChecker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordChecker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
