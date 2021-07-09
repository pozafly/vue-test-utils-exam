<template>
  <div>{{ propsMessage }}</div>
</template>

<script>
export default {
  props: {
    propsMessage: {
      type: String,
      default: '',
    },
  },
};
</script>
