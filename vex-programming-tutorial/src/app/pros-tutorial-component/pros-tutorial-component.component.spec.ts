import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsTutorialComponentComponent } from './pros-tutorial-component.component';

describe('ProsTutorialComponentComponent', () => {
  let component: ProsTutorialComponentComponent;
  let fixture: ComponentFixture<ProsTutorialComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsTutorialComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsTutorialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
