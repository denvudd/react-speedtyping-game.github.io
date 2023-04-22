export const countAccuracy = (error: number, total: number): number => {
  if (total > 0) {
    const corrects = total - error;
    return (corrects / total) * 100;
  }

  return 0;
};
