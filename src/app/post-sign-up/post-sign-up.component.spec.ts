import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSignUpComponent } from './post-sign-up.component';

describe('PostSignUpComponent', () => {
  let component: PostSignUpComponent;
  let fixture: ComponentFixture<PostSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
