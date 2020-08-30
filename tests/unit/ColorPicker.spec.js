import { shallowMount } from '@vue/test-utils';
import ColorPicker from '@/components/ColorPicker';
import convert from 'color-convert';


describe('ColorPicker', () => {

  let wrapper = null;
  const propsData = {
    swatchSemua: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff'],
  };

  beforeEach(() => ( wrapper = shallowMount(ColorPicker, { propsData }) ));
  afterEach(() => wrapper.destroy());

  describe('SwatchSemua', () => {

    test('menampilkan masing-masing warna dalam bentuk swatch-swatch', () => {
      // Assert
      // ? pertanyaan: perlu direfaktor jadi test case sendiri?
      const domSwatchSemua = wrapper.findAll('.swatch');
      expect(domSwatchSemua.length).toBeGreaterThan(0); // lulus

      propsData.swatchSemua.forEach((swatch, index) => {
        // lulus
        expect(domSwatchSemua.at(index).attributes().style).toBe(
          `background-color: rgb(${convert.hex.rgb(swatch).join(', ')});`
        );
      });
    });

    test('set swatch yang pertama jadi pilihan default', () => {
      const domSwatchPertama = wrapper.find('.swatch');
      // * catatan: fase HIJAU, dibuat lulus dengan nge-hardcoding class ke atribut DOM-nya
      // * catatan: Specnya cukup sederhana karena yang dicek cuma keberadaan class di DOM template.
      // Kekurangannya, dia gak tau apakah swatch lain juga dipilih atau enggak sehingga belum tentu
      // yakin kalau swatch lain tidak dipilih
      expect(domSwatchPertama.classes()).toContain('active');
    });

  });

});
