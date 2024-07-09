import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupThreeComponent } from './group-three.component';

describe('GroupThreeComponent', () => {
  let component: GroupThreeComponent;
  let fixture: ComponentFixture<GroupThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
