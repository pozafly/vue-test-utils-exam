import Vue from 'vue';
import MainPage from '@/views/MainPage.vue';

test('MainPage Component', () => {
  const cmp = new Vue(MainPage).$mount;
  expect(cmp.message).toBe(undefined);
});
