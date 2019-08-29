export const uuid = (seed = 100) =>
  Math.random()
    .toString(36)
    .substring(2, 2 + seed);

export const characterCount = string => string.length;

export const isCharacterLimitExceeded = (string, limit) =>
  (characterCount(string) > limit && true) || false;

export const truncateCharacter = (string, from = 0, to = 0) =>
  isCharacterLimitExceeded(string, to) && string.slice(from, to);
