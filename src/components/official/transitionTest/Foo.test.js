const { shallowMount } = require('@vue/test-utils');
import Foo from './Foo.vue';

it('should render Foo, then hide it!', async () => {
  const wrapper = shallowMount(Foo);
});
