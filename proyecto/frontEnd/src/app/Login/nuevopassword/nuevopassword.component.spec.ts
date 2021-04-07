import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopasswordComponent } from './nuevopassword.component';

describe('NuevopasswordComponent', () => {
  let component: NuevopasswordComponent;
  let fixture: ComponentFixture<NuevopasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevopasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevopasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
