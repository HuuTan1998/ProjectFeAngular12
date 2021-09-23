import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFornComponent } from './reactive-forn.component';

describe('ReactiveFornComponent', () => {
  let component: ReactiveFornComponent;
  let fixture: ComponentFixture<ReactiveFornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
