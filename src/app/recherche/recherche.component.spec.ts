import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheComponent } from './recherche.component';

describe('RechercheComponent', () => {
  let component: RechercheComponent;
  let fixture: ComponentFixture<RechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
