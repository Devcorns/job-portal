import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import LearnTest from './learn-test';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LearnTest
      ],
    }).compileComponents();
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(LearnTest);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  it(`Check title`, () => {
    const fixture = TestBed.createComponent(LearnTest);
    const app = fixture.componentInstance;
    expect(app.testTitle).toEqual('Test Title');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(LearnTest);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-basics app is running!');
  // });
});
