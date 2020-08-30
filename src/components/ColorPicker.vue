<template>
  <div class="color-picker">
    <ul class="swatch-semua">
      <li class="swatch"
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
    // props Array kode warna yang diambil untuk kasih style warna di swatch
    swatchSemua: {
      type: Array,
      // nilai default kalau gak dioperi Array kode warnanya
      default () {
        return [];
      },
    },
  },
}
</script>

<style>
</style>
