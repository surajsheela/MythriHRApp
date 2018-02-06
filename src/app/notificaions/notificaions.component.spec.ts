import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificaionsComponent } from './notificaions.component';

describe('NotificaionsComponent', () => {
  let component: NotificaionsComponent;
  let fixture: ComponentFixture<NotificaionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificaionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificaionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
