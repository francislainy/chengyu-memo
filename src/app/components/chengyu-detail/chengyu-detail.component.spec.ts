import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChengyuDetailComponent } from './chengyu-detail.component';

describe('ChengyuDetailComponent', () => {
  let component: ChengyuDetailComponent;
  let fixture: ComponentFixture<ChengyuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChengyuDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChengyuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
