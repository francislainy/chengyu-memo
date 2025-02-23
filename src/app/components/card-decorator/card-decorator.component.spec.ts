import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDecoratorComponent } from './card-decorator.component';

describe('CardDecoratorComponent', () => {
  let component: CardDecoratorComponent;
  let fixture: ComponentFixture<CardDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
