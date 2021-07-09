import { shallowMount } from '@vue/test-utils';
import Child from './Child.vue';

describe('props test', () => {
  it('1', () => {
    const childWrapper = shallowMount(Child, {
      propsData: {
        propsMessage: '야야',
      },
    });
    expect(childWrapper.text()).toContain('야야');
  });
});
