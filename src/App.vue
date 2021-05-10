<template>
  <div id="app">
    <router-view></router-view>
    <BoilerPlateComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import BoilerPlateComponent from '@/components/BoilerPlateComponent.vue';

export default {
  name: 'App',
  components: {
    BoilerPlateComponent,
  },
};
</script>

<style>
@import './css/common.scss';
</style>
