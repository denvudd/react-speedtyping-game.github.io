import Carret from "./Carret";
import Character from "./Character";

const UserTypings = ({
  userInput,
  words,
}: {
  userInput: string;
  words: string;
}) => {
  const typingCharacters = userInput.split("");

  return (
    <div className="absolute inset-0 font-mono">
      {typingCharacters.map((char, index) => (
        <Character
          key={index}
          current={char}
          expected={words[index]} // each symbol
        ></Character>
      ))}
      <Carret />
    </div>
  );
};

export default UserTypings;
