import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeParfumComponent } from './liste-parfum.component';

describe('ListeParfumComponent', () => {
  let component: ListeParfumComponent;
  let fixture: ComponentFixture<ListeParfumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeParfumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
