<template>
  <div>
    <button @click="onClick">props insert</button>
    <Child :props-message="propsMessage" />
    {{ settingText }}
  </div>
</template>

<script>
import Child from '@/components/official/propsTest/Child.vue';

export default {
  components: { Child },
  data() {
    return {
      propsMessage: '',
      settingText: '',
    };
  },
  methods: {
    onClick() {
      this.propsMessage = 'props';
    },
  },
};
</script>

<style></style>
