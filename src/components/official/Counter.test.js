import { mount } from '@vue/test-utils';
import Counter from './Counter.vue';

test.skip('increments counter value on click', async () => {
  const wrapper = mount(Counter);
  const button = wrapper.find('button');
  const text = wrapper.find('p');

  expect(text.text()).toContain('Total clicks: 0');

  await button.trigger('click');

  expect(text.text()).toContain('Total clicks: 1');
});
