import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChengyuListComponent } from './chengyu-list.component';

describe('ChengyuListComponent', () => {
  let component: ChengyuListComponent;
  let fixture: ComponentFixture<ChengyuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChengyuListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChengyuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
