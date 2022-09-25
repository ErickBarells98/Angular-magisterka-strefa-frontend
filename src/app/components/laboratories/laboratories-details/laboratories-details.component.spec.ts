import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriesDetailsComponent } from './laboratories-details.component';

describe('LaboratoriesDetailsComponent', () => {
  let component: LaboratoriesDetailsComponent;
  let fixture: ComponentFixture<LaboratoriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
