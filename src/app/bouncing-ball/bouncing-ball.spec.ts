import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingBall } from './bouncing-ball';

describe('BouncingBall', () => {
  let component: BouncingBall;
  let fixture: ComponentFixture<BouncingBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouncingBall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouncingBall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
