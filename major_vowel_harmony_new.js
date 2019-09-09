const vowels = [['a', 'ı', 'o', 'u'], ['e', 'i', 'ö', 'ü']];

const VOWELS_REGEXP = new RegExp(`[${vowels.flat().join('')}]`, 'ig');

const hasMajorVowelHarmony = word => {
  const wordVowels = word.match(VOWELS_REGEXP);

  return !!vowels.find(type =>
    wordVowels.every(vowel => type.find(v => v == vowel))
  );
};

export default hasMajorVowelHarmony;
