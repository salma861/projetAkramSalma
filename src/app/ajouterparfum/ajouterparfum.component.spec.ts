import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterparfumComponent } from './ajouterparfum.component';

describe('AjouterparfumComponent', () => {
  let component: AjouterparfumComponent;
  let fixture: ComponentFixture<AjouterparfumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterparfumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterparfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
