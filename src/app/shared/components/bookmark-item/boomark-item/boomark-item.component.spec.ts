import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomarkItemComponent } from './boomark-item.component';

describe('BoomarkItemComponent', () => {
  let component: BoomarkItemComponent;
  let fixture: ComponentFixture<BoomarkItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoomarkItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoomarkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
