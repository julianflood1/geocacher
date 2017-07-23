import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheListingsComponent } from './cache-listings.component';

describe('CacheListingsComponent', () => {
  let component: CacheListingsComponent;
  let fixture: ComponentFixture<CacheListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
