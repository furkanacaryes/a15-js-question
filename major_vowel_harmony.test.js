import hasMajorVowelHarmony from './major_vowel_harmony_new';

it('runs correctly', () => {
  expect(hasMajorVowelHarmony('adım')).toBe(true);
  expect(hasMajorVowelHarmony('ayak')).toBe(true);
  expect(hasMajorVowelHarmony('boyunduruk')).toBe(true);
  expect(hasMajorVowelHarmony('burun')).toBe(true);
  expect(hasMajorVowelHarmony('dalga')).toBe(true);
  expect(hasMajorVowelHarmony('dudak')).toBe(true);
  expect(hasMajorVowelHarmony('kırlangıç')).toBe(true);
  expect(hasMajorVowelHarmony('beşik')).toBe(true);
  expect(hasMajorVowelHarmony('bilezik')).toBe(true);
  expect(hasMajorVowelHarmony('gelincik')).toBe(true);
  expect(hasMajorVowelHarmony('gözlük')).toBe(true);
  expect(hasMajorVowelHarmony('üzengi')).toBe(true);
  expect(hasMajorVowelHarmony('vergi')).toBe(true);
  expect(hasMajorVowelHarmony('yüzük')).toBe(true);

  expect(hasMajorVowelHarmony('elma')).toBe(false);
  expect(hasMajorVowelHarmony('şişman')).toBe(false);
  expect(hasMajorVowelHarmony('anne')).toBe(false);
  expect(hasMajorVowelHarmony('kardeş')).toBe(false);
  expect(hasMajorVowelHarmony('kalem')).toBe(false);
  expect(hasMajorVowelHarmony('mavi')).toBe(false);
  expect(hasMajorVowelHarmony('kitap')).toBe(false);
  expect(hasMajorVowelHarmony('edebiyat')).toBe(false);
  expect(hasMajorVowelHarmony('düşman')).toBe(false);
  expect(hasMajorVowelHarmony('televizyon')).toBe(false);
  expect(hasMajorVowelHarmony('dakika')).toBe(false);
  expect(hasMajorVowelHarmony('saniye')).toBe(false);
  expect(hasMajorVowelHarmony('ilkbahar')).toBe(false);
});
