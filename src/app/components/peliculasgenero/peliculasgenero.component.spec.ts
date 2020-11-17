import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasgeneroComponent } from './peliculasgenero.component';

describe('PeliculasgeneroComponent', () => {
  let component: PeliculasgeneroComponent;
  let fixture: ComponentFixture<PeliculasgeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasgeneroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasgeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
