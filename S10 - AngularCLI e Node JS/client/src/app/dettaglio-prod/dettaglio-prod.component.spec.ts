import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProdComponent } from './dettaglio-prod.component';

describe('DettaglioProdComponent', () => {
  let component: DettaglioProdComponent;
  let fixture: ComponentFixture<DettaglioProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
