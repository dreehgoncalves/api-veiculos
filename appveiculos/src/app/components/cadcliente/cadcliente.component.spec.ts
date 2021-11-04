import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadclienteComponent } from './cadcliente.component';

describe('CadclienteComponent', () => {
  let component: CadclienteComponent;
  let fixture: ComponentFixture<CadclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
