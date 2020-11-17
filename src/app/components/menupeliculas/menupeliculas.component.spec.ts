import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupeliculasComponent } from './menupeliculas.component';

describe('MenupeliculasComponent', () => {
  let component: MenupeliculasComponent;
  let fixture: ComponentFixture<MenupeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenupeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
