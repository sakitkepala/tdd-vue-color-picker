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
      // * catatan: fase merah, gagal karena class active gak ada di komponen:
      // belum implemen class active di komponen
      expect(domSwatchPertama.classes()).toContain('active');
    });

  });

});
