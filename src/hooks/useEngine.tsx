import { useState, useCallback, useEffect } from "react";
import { useWords } from "./useWords";
import { useTimer } from "./useTimer";
import { useTypings } from "./useTypings";
import { countErrors } from "../utils/countErrors";

export type TypingState = "start" | "run" | "finish";

export const useEngine = (time: number) => {
  const [typingState, setTypingState] = useState<TypingState>("start");
  const { words, updateWords } = useWords(12);
  const { timeLeft, startTimer, resetTimer, stopTimer } = useTimer(time);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    typingState !== "finish"
  );
  const isStart = typingState === "start" && cursor > 0;
  const isLastChar = cursor === words.length;
  const [errors, setErrors] = useState(0);

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, cursor]);

  // start typing
  useEffect(() => {
    if (isStart) {
      setTypingState("run");
      startTimer();
    }
  }, [isStart, startTimer, cursor]);

  // times up
  useEffect(() => {
    if (!timeLeft) {
      setTypingState("finish");
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  // reached the last symbol
  useEffect(() => {
    if (isLastChar) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [cursor, words, clearTyped, typed, isLastChar, updateWords, sumErrors]);

  const restart = useCallback(() => {
    resetTimer();
    resetTotalTyped();
    setTypingState("start");
    setErrors(0);
    clearTyped();
    updateWords();
  }, [clearTyped, updateWords, resetTimer, resetTotalTyped])

  return { typingState, words, timeLeft, typed, errors, totalTyped, restart };
};
