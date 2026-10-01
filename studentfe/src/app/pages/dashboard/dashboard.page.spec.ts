/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DashboardPage } from './dashboard.page';

describe('DashboardPage', () => {
  it('should create the page', async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage],
      providers: [provideRouter([])]
    }).compileComponents();

    const fixture = TestBed.createComponent(DashboardPage);
    const page = fixture.componentInstance;
    expect(page).toBeTruthy();
  });
});