import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionConComentariosComponent } from './publicacion-con-comentarios.component';

describe('PublicacionConComentariosComponent', () => {
  let component: PublicacionConComentariosComponent;
  let fixture: ComponentFixture<PublicacionConComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionConComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionConComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
