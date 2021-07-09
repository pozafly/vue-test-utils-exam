<template>
  <div>
    <Child @custom="onCustom" />
    <p v-if="emitted">야호!</p>
  </div>
</template>

<script>
import Child from '@/components/official/emitTest/Child.vue';

export default {
  components: { Child },
  data() {
    return {
      emitted: false,
    };
  },
  methods: {
    onCustom() {
      this.emitted = true;
    },
  },
};
</script>
