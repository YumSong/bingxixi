import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HelloComponent} from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return component with email when component create', () => {
    expect(component.email).toEqual('2500269512@qq.com');
    expect(component.author).toEqual(undefined);
  });

  it('should return component with email when component create with author then getHelloInfo', () => {
    component.setUserInfo();

    const result = component.getHelloInfo();
    expect(result.split('-')[0]).toBe('Tony');
    expect(result.split('-')[1]).toBe('2500269512@qq.com');
  });

  it('should return component with email when component create without author then getHelloInfo', () => {
    const result = component.getHelloInfo();

    expect(result).toEqual(undefined);
  });
});
