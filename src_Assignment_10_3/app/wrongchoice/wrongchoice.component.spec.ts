import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongchoiceComponent } from './wrongchoice.component';

describe('WrongchoiceComponent', () => {
  let component: WrongchoiceComponent;
  let fixture: ComponentFixture<WrongchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongchoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
