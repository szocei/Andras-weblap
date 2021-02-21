import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzolgComponent } from './szolg.component';

describe('SzolgComponent', () => {
  let component: SzolgComponent;
  let fixture: ComponentFixture<SzolgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzolgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
