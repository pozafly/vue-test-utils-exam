import { shallowMount } from '@vue/test-utils';
import UpdateText from '../UpdateText.vue';

it.skip('updates text', async () => {
  const wrapper = shallowMount(UpdateText);
  const button = wrapper.find('button');
  const span = wrapper.find('span');

  expect(span.text()).toBe('start!');

  await button.trigger('click');

  expect(span.text()).toContain('updated');

  await button.trigger('click');

  expect(span.text()).toBe('some different text');
});
