import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { FrontFromCommandComponent } from './front-from-command.component';
import { FrontHeaderComponent } from './front-header.component';

describe('FrontFromCommandComponent', () => {
  let component: FrontHeaderComponent;
  let fixture: ComponentFixture<FrontHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
