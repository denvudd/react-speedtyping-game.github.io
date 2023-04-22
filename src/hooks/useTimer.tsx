import { useCallback, useRef, useEffect, useState } from "react";

export const useTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null); // interval id

  // update seconds on change
  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  const startTimer = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeLeft(seconds);
  }, [seconds]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current && timeLeft > 0) {
      const current = timeLeft;
      setTimeLeft(current);
    }
  }, [timeLeft]);

  // if the timer reaches 0, clear the timer interval

  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startTimer, resetTimer, stopTimer };
};
