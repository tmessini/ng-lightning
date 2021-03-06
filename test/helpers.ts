/**
 * Testing helpers
 */

import {beforeEachProviders} from '@angular/core/testing';
import {ComponentFixture} from '@angular/compiler/testing';
import {provideNglConfig} from '../src/config/config';

// Default configuration for every TestComponent
beforeEachProviders(() => [provideNglConfig()]);

export function dispatchKeyEvent(fixture: ComponentFixture<any>, predicate: any, key: string, indexOf: number = -1) {
  const { debugElement} = fixture;
  const _debugElement = indexOf > -1 ? debugElement.queryAll(predicate)[indexOf] : debugElement.query(predicate);
  _debugElement.triggerEventHandler(key, new Event(''));
}

export function selectElements(element: HTMLElement, selector: string): HTMLElement[] {
  return [].slice.call(element.querySelectorAll(selector));
}
