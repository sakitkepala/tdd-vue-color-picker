import { shallowMount } from '@vue/test-utils';
import ColorPicker from '@/components/ColorPicker';
import convert from 'color-convert';


describe('ColorPicker', () => {

  let wrapper = null;
  // * catatan: untuk mensimulasikan mounting dengan props,
  // props kita perlu disupply lewat properti yang namanya harus `propsData`
  // di objek yang dioper ke argumen `shallowMount()`
  const propsData = {
    swatchSemua: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff'],
  };

  // mounting dengan props: lihat properti `propsData`
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
        // * catatan: refaktor, ganti dengan ngeloop template swatch menurut data props yang disuplai
        expect(domSwatchSemua.at(index).attributes().style).toBe(
          `background-color: rgb(${convert.hex.rgb(swatch).join(', ')});` // binding atribut style di template digenerate dengan output pakai `;`,
                                                                          // jadi matchernya juga harus dikasih `;` di belakangnya
        );
      });
    });

  });

});
