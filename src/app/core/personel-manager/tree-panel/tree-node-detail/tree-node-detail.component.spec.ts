import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeDetailComponent } from './tree-node-detail.component';

describe('TreeNodeDetailComponent', () => {
  let component: TreeNodeDetailComponent;
  let fixture: ComponentFixture<TreeNodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
