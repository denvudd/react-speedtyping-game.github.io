export const countErrors = (current: string, expected: string) => {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce(
    (errors: number, expectedCharacter: string, i: number): number => {
      if (current[i] !== expectedCharacter) {
        errors++;
      }

      return errors;
    },
    0
  );
};