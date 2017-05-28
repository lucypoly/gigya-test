import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOptionsFormComponent } from './account-options-form.component';

describe('AccountOptionsFormComponent', () => {
  let component: AccountOptionsFormComponent;
  let fixture: ComponentFixture<AccountOptionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOptionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
