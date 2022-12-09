/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartItmeComponent } from './cart-itme.component';

describe('CartItmeComponent', () => {
  let component: CartItmeComponent;
  let fixture: ComponentFixture<CartItmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
