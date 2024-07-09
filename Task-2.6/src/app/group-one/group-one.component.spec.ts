import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOneComponent } from './group-one.component';

describe('GroupOneComponent', () => {
  let component: GroupOneComponent;
  let fixture: ComponentFixture<GroupOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
