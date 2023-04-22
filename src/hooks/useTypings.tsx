import { useCallback, useRef, useEffect, useState } from "react";

export const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0); // cursor position
  const [typed, setTyped] = useState<string>(""); // typed text
  const totalTyped = useRef(0);

  const isKeyboardAllowed = (code: string): boolean => {
    return (
      code.startsWith("Key") ||
      code.startsWith("Digit") ||
      code === "Backspace" ||
      code === "Space"
    );
  };

  const isKeyboardNotAllowed = (code: string): boolean => {
    return (
      code === "F5" ||
      code === "Tab" ||
      code === "AltLeft" ||
      code === "AltRight"
    );
  };

  const handleKeydown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      console.log(!enabled && isKeyboardAllowed(code));
      // if enabled = false and keyboard code are not allowed
      if (!enabled && !isKeyboardAllowed(code)) { 
        return;
      }

      // if special keyboard code are not allowed
      if (isKeyboardNotAllowed(code)) {
        return;
      }

      switch (key) {
        case "Backspace": // delete
          setTyped((prev) => prev.slice(0, -1));
          setCursor(cursor - 1);
          totalTyped.current -= 1;
          break;
        default: // write
          setTyped((prev) => prev.concat(key));
          setCursor(cursor + 1);
          totalTyped.current += 1;
      }
    },
    [cursor, enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  return {
    typed,
    cursor,
    totalTyped: totalTyped.current,
    clearTyped,
    resetTotalTyped,
  };
};
