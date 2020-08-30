<template>
  <div class="color-picker">
    <ul class="swatch-semua">
      <li class="swatch active"
        :key="index"
        v-for="(swatch, index) in swatchSemua"
        :style="{ backgroundColor: `#${swatch}` }"
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
}
</script>

<style>
</style>
