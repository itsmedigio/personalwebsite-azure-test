import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorciboComponent } from './editorcibo.component';

describe('EditorciboComponent', () => {
  let component: EditorciboComponent;
  let fixture: ComponentFixture<EditorciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorciboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
