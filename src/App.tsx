import { useState } from "react";
import { useEngine } from "./hooks/useEngine";
import { countAccuracy } from "./utils/countAccuracy";
import Timer from "./components/Timer";
import Words from "./components/Words";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import TimeChanger from "./components/TimeChanger";
import { MdAccessTime } from "react-icons/md";

function App() {
  const [time, setTime] = useState(30);
  const [showTimeChanger, setShowTimeChanger] = useState(false);
  const { typingState, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine(time);

  const handleTimeChange = (newTime: number) => {
    setTime(newTime);
  };

  return (
    <div className="min-h-screen bg-slate-800 tracking-wider px-4 text-primary-500 grid place-items-center">
      <div className="max-w-screen-xl m-auto group">
        {showTimeChanger && <TimeChanger onTimeChange={handleTimeChange} />}
        <div className="flex items-center gap-3 group">
          <Timer timeLeft={timeLeft} />
          <button onClick={() => setShowTimeChanger(!showTimeChanger)}>
            <MdAccessTime className="w-5 h-5 opacity-0 group-hover:opacity-100 duration-100" />
          </button>
        </div>
        <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
          <Words words={words} />
          <UserTypings userInput={typed} words={words} />
        </div>
        <RestartButton
          className={"mx-auto mt-10 text-slate-500"}
          onRestart={restart}
        />
        {typingState === "finish" && (
          <Results
            errors={errors}
            accuracy={countAccuracy(errors, totalTyped)}
            total={totalTyped}
          />
        )}
      </div>
    </div>
  );
}

export default App;
