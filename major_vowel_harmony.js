const vowels = {
  hard: ['a', 'ı', 'o', 'u'],
  soft: ['e', 'i', 'ö', 'ü']
};

const hasVowelWithType = (word, vowelType) =>
  word.split('').some(char => vowels[vowelType].find(vowel => vowel === char));

const hasMajorVowelHarmony = word => {
  const firstSyllable = word.slice(0, 2);

  if (hasVowelWithType(firstSyllable, 'hard')) {
    return !hasVowelWithType(word, 'soft');
  } else {
    return !hasVowelWithType(word, 'hard');
  }
};

export default hasMajorVowelHarmony;
