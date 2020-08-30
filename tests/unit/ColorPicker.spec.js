import { shallowMount } from '@vue/test-utils';
import ColorPicker from '@/components/ColorPicker';
import convert from 'color-convert';


describe('ColorPicker', () => {

  let wrapper = null;
  const dataProps = {
    swatchSemua: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff'],
  };

  beforeEach(() => ( wrapper = shallowMount(ColorPicker, { dataProps }) ));
  afterEach(() => wrapper.destroy());

  describe('SwatchSemua', () => {

    test('menampilkan masing-masing warna dalam bentuk swatch-swatch', () => {
      // Assert
      // * catatan: ambil semua DOM swatch yang sudah dimounting di dalam komponen color picker
      const domSwatchSemua = wrapper.findAll('.swatch');
      expect(domSwatchSemua.length).toBeGreaterThan(0); // lulus

      // dataProps.swatchSemua.forEach((swatch, index) => {
      //   // * catatan: assertnya diloop sebanyak jumlah swatch di props
      //   // habis itu dicocokkan styling warna yang ada di DOM
      //   // dengan yang dioperkan lewat props
      //   // * pertanyaan: apakah styling swatch di komponen pakai styling inline lewat attribut style HTML?
      //   expect(domSwatchSemua.at(index).attributes().style).toBe(
      //     `background-color: rgb(${convert.hex.rgb(swatch).join(', ')})`
      //   );
      // });
    });

  });

});
