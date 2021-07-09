<template>
  <div>
    <button @click="updateButton">update</button>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'start!',
      count: 0,
    };
  },
  methods: {
    updateButton() {
      this.count++;
      if (this.count <= 1) {
        this.msg = 'updated';
        return;
      }
      this.msg = 'some different text';
    },
  },
};
</script>
