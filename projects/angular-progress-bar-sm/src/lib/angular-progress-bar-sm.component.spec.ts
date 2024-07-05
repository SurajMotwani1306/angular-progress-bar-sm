import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProgressBarSmComponent } from './angular-progress-bar-sm.component';

describe('AngularProgressBarSmComponent', () => {
  let component: AngularProgressBarSmComponent;
  let fixture: ComponentFixture<AngularProgressBarSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularProgressBarSmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularProgressBarSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
