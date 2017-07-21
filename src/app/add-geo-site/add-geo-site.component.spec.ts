import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeoSiteComponent } from './add-geo-site.component';

describe('AddGeoSiteComponent', () => {
  let component: AddGeoSiteComponent;
  let fixture: ComponentFixture<AddGeoSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGeoSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
