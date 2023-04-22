import classNames from "classnames";

const Character = ({
  current,
  expected,
}: {
  current: string;
  expected: string;
}) => {
  const isCorrect = current === expected; // current symbol
  const isWhiteSpace = expected === " ";
  return (
    <span
      className={classNames({
        "text-red-500": !isCorrect && !isWhiteSpace, // if incorrect
        "bg-red-500/50": !isCorrect && isWhiteSpace, // if incorrect space
        "text-primary-400": isCorrect && !isWhiteSpace, // if correct
      })}
    >
      {expected}
    </span>
  );
};

export default Character;
