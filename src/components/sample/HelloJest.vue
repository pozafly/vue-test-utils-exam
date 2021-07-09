<template>
  <div>
    {{ reverseMsg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Test Coverage',
    };
  },
  computed: {
    reverseMsg() {
      return this.reverseString(this.msg);
    },
  },
  methods: {
    reverseString(str) {
      return str.split('').reverse().join('');
    },
  },
};
</script>

<style></style>
