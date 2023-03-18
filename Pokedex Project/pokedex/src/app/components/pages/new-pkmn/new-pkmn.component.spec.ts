import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPkmnComponent } from './new-pkmn.component';

describe('NewPkmnComponent', () => {
  let component: NewPkmnComponent;
  let fixture: ComponentFixture<NewPkmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPkmnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPkmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
