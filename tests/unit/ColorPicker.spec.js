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
      expect(domSwatchPertama.classes()).toContain('active'); // lulus
    });

    test('tidak set active swatch selain yang pertama ketika masih default', () => {
      const domSwatchActive = wrapper.findAll('.swatch').filter(
        wr => wr.classes('active')
      );
      expect(domSwatchActive.length).toBe(1); // lulus
    });

    test('buat supaya swatch active waktu diklik', async () => {
      const domSwatchPertama = wrapper.find('.swatch');
      const domSwatchTarget = wrapper.findAll('.swatch').at(2);

      await domSwatchTarget.trigger('click');

      expect(domSwatchTarget.classes()).toContain('active'); // lulus
      expect(domSwatchPertama.classes()).not.toContain('active'); // lulus
    });

  });

});
