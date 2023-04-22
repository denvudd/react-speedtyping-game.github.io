import { faker } from "@faker-js/faker";

export const generateWords = (
  count: number,
  lowerCase: boolean = true
): string => {
  if (lowerCase) {
    return faker.random.words(count).toLowerCase();
  } else {
    return faker.random.words(count);
  }
};
