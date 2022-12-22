import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSavingShowComponent } from './account-saving-show.component';

describe('AccountSavingShowComponent', () => {
  let component: AccountSavingShowComponent;
  let fixture: ComponentFixture<AccountSavingShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSavingShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSavingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
