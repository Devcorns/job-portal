import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFromCommandComponent } from './front-from-command.component';

describe('FrontFromCommandComponent', () => {
  let component: FrontFromCommandComponent;
  let fixture: ComponentFixture<FrontFromCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontFromCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontFromCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
