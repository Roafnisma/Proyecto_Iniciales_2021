import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatedraticosPorCursoComponent } from './catedraticos-por-curso.component';

describe('CatedraticosPorCursoComponent', () => {
  let component: CatedraticosPorCursoComponent;
  let fixture: ComponentFixture<CatedraticosPorCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatedraticosPorCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatedraticosPorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
