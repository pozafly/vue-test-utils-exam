<template>
  <div id="app">
    <router-view></router-view>
    <UpdateText></UpdateText>
  </div>
</template>

<script>
import UpdateText from '@/components/official/UpdateText';
export default {
  name: 'App',
  components: { UpdateText },
};
</script>

<style lang="scss">
@import '@/css/common.scss';
</style>
