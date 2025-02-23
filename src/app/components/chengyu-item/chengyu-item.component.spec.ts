import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChengyuItemComponent } from './chengyu-item.component';

describe('ChengyuItemComponent', () => {
  let component: ChengyuItemComponent;
  let fixture: ComponentFixture<ChengyuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChengyuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChengyuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
