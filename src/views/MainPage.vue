<template>
  <div class="color-red">
    MainPage
    <BoilerPlateComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import BoilerPlateComponent from '@/components/BoilerPlateComponent.vue';

export default {
  components: {
    BoilerPlateComponent,
  },
};
</script>

<style lang="scss">
$bgColor: red;

.color-red {
  color: $bgColor;
}
</style>
