import Vue from 'vue';
import MainPage from '@/views/MainPage.vue';
import { expect } from '@jest/globals';

test('MainPage Component', () => {
  const cmp = new Vue(MainPage).$mount;
  expect(cmp.message).toBe('Vue!');
});
