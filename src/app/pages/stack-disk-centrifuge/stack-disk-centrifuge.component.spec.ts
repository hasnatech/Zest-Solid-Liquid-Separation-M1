import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDiskCentrifugeComponent } from './stack-disk-centrifuge.component';

describe('StackDiskCentrifugeComponent', () => {
  let component: StackDiskCentrifugeComponent;
  let fixture: ComponentFixture<StackDiskCentrifugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackDiskCentrifugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDiskCentrifugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
