import { mount } from '@vue/test-utils';
import Parent from '@/components/official/emitTest/Parent.vue';
import Child from '@/components/official/emitTest/Child.vue';

describe('ParentComponent', () => {
  it("displays 'Emitted!' when custom event is emitted", async () => {
    const wrapper = mount(Parent);
    await wrapper.findComponent(Child).vm.$emit('custom');
    expect(wrapper.html()).toContain('야호!');
  });
});
