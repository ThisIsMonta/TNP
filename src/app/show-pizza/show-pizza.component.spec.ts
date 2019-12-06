import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPizzaComponent } from './show-pizza.component';

describe('ShowPizzaComponent', () => {
  let component: ShowPizzaComponent;
  let fixture: ComponentFixture<ShowPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
