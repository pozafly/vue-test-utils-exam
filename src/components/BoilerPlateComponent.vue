<template>
  <div>
    <div class="msg">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.msg {
  color: #000;
  font-size: 3rem;
}
</style>
