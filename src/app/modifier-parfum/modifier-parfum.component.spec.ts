import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierParfumComponent } from './modifier-parfum.component';

describe('ModifierParfumComponent', () => {
  let component: ModifierParfumComponent;
  let fixture: ComponentFixture<ModifierParfumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierParfumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
