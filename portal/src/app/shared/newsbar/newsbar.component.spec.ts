import { NewsbarComponent } from './newsbar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('NewsbarComponent', () => {
  let component: NewsbarComponent;
  let fixture: ComponentFixture<NewsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
