import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudAddComponent } from './stud-add.component';

describe('StudAddComponent', () => {
  let component: StudAddComponent;
  let fixture: ComponentFixture<StudAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
