<template>
  <div class="color-picker">
    <ul class="swatch-semua">
      <li class="swatch"
        :key="index"
        v-for="(swatch, index) in swatchSemua"
        :style="{ backgroundColor: `#${swatch}` }"
        :class="{ active: index === swatchAktif }"
        @click="swatchAktif = index"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    swatchSemua: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      swatchAktif: 0
    };
  },
}
</script>

<style>
</style>
