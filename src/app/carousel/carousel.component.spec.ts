import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarouselComponent } from './carousel.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CarouselComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CarouselComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it('should render title', () => {
    const fixture = TestBed.createComponent(CarouselComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('carousel app is running!');
  });
});

