import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PderechoComponent } from './pderecho.component';

describe('PderechoComponent', () => {
  let component: PderechoComponent;
  let fixture: ComponentFixture<PderechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PderechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PderechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
