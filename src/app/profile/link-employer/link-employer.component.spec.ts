import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEmployerComponent } from './link-employer.component';

describe('LinkEmployerComponent', () => {
  let component: LinkEmployerComponent;
  let fixture: ComponentFixture<LinkEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
