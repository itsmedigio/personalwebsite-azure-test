import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RimuoviciboComponent } from './rimuovicibo.component';

describe('RimuoviciboComponent', () => {
  let component: RimuoviciboComponent;
  let fixture: ComponentFixture<RimuoviciboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RimuoviciboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RimuoviciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
