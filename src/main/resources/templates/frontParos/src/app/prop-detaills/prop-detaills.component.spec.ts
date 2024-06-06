import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDetaillsComponent } from './prop-detaills.component';

describe('PropDetaillsComponent', () => {
  let component: PropDetaillsComponent;
  let fixture: ComponentFixture<PropDetaillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropDetaillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
