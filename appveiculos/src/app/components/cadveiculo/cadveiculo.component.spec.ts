import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadveiculoComponent } from './cadveiculo.component';

describe('CadveiculoComponent', () => {
  let component: CadveiculoComponent;
  let fixture: ComponentFixture<CadveiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadveiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadveiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
