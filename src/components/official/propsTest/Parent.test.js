import { shallowMount } from '@vue/test-utils';
import Parent from './Parent.vue';

it('setData test', async () => {
  const wrapper = shallowMount(Parent);
  expect(wrapper.text()).toContain('');

  await wrapper.setData({ settingText: 'hi!' });
  expect(wrapper.html()).toContain('hi!');
});
