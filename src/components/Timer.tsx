const Timer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div>
      <h2 className="text-primary-400 font-medium text-start">Time: {timeLeft}</h2>
    </div>
  );
};

export default Timer;
