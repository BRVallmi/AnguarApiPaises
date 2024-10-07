import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPaisesComponent } from './info-paises.component';

describe('InfoPaisesComponent', () => {
  let component: InfoPaisesComponent;
  let fixture: ComponentFixture<InfoPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPaisesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
