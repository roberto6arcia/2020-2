import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoConsultaComponent } from './credito-consulta.component';

describe('CreditoConsultaComponent', () => {
  let component: CreditoConsultaComponent;
  let fixture: ComponentFixture<CreditoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
