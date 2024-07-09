import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFourComponent } from './group-four.component';

describe('GroupFourComponent', () => {
  let component: GroupFourComponent;
  let fixture: ComponentFixture<GroupFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
