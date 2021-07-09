import { shallowMount, mount } from '@vue/test-utils';
import HelloJest2 from '../HelloJest2.vue';

describe.skip('HelloJest.vue', () => {
  let wrapper;

  describe('ShallowMount', () => {
    beforeEach(() => {
      // 얕은 마운트
      // 하위 컴포넌트를 포함(렌더링) 하지 않습니다.
      wrapper = shallowMount(HelloJest2);
    });

    test('1', () => {
      console.log(wrapper);
      expect(wrapper.text()).toBe('Hello Jest~');
    });
  });
});
