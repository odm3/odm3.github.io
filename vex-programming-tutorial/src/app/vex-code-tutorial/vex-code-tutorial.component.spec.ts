import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VexCodeTutorialComponent } from './vex-code-tutorial.component';

describe('VexCodeTutorialComponent', () => {
  let component: VexCodeTutorialComponent;
  let fixture: ComponentFixture<VexCodeTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VexCodeTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VexCodeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
