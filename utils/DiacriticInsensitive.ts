export function createDiacriticInsensitiveRegex (text: string) {
  const replacements: Record<string, string> = {
    'a': '[aáàãâä]',
    'e': '[eéèêë]',
    'i': '[iíìîï]',
    'o': '[oóòõôö]',
    'u': '[uúùûü]',
    'c': '[cç]',
    'A': '[AÁÀÃÂÄ]',
    'E': '[EÉÈÊË]',
    'I': '[IÍÌÎÏ]',
    'O': '[OÓÒÕÔÖ]',
    'U': '[UÚÙÛÜ]',
    'C': '[CÇ]',
  };

  let regexPattern = '';
  for (const char of text) {
    regexPattern += replacements[char] || char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  return new RegExp(regexPattern, 'i'); // 'i' para case-insensitive
};