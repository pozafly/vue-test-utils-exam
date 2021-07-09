import { shallowMount } from '@vue/test-utils';
import HelloJest2 from '../HelloJest2.vue';

describe('HelloJest', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HelloJest2);
  });
  test('메세지 확인', () => {
    expect(wrapper.vm.msg).toBe('Hello Jest~');
  });
});
