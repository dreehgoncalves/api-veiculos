import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesveiculosComponent } from './detalhesveiculos.component';

describe('DetalhesveiculosComponent', () => {
  let component: DetalhesveiculosComponent;
  let fixture: ComponentFixture<DetalhesveiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesveiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesveiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
