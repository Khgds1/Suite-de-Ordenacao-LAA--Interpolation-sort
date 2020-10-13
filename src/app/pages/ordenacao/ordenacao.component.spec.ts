import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenacaoComponent } from './ordenacao.component';

describe('OrdenacaoComponent', () => {
  let component: OrdenacaoComponent;
  let fixture: ComponentFixture<OrdenacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
