import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecanterComponent } from './decanter.component';

describe('DecanterComponent', () => {
  let component: DecanterComponent;
  let fixture: ComponentFixture<DecanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
