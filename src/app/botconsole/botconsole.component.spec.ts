import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotconsoleComponent } from './botconsole.component';

describe('BotconsoleComponent', () => {
  let component: BotconsoleComponent;
  let fixture: ComponentFixture<BotconsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotconsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
