import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Careerprofile } from './careerprofile';

describe('Careerprofile', () => {
  let component: Careerprofile;
  let fixture: ComponentFixture<Careerprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careerprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Careerprofile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
