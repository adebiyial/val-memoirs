export const uuid = (seed = 100) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + seed);

export const characterCount = string => string.length;

export const isCharacterLimitExceeded = string =>
  (characterCount(string) > 100 && true) || false;

export const truncateCharacter = string =>
  isCharacterLimitExceeded(string) && string.slice(0, 100);
