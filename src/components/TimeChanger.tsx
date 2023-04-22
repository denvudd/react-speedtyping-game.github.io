import { useState } from "react";
import ReactSlider from "react-slider";
import { motion } from "framer-motion";

const TimeChanger = ({
  onTimeChange,
}: {
  onTimeChange: (time: number) => void;
}) => {
  const [time, setTime] = useState(30);

  const handleTimeChange = (newTime: number) => {
    setTime(newTime);
    onTimeChange(newTime);
  };

  return (
    <motion.div
      className="mb-4"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ReactSlider
        className="h-8"
        thumbClassName="bg-red-500 pointer w-[30px] h-[30px] rounded-full outline-none"
        trackClassName="h-[1px] border-2 border-primary-400 top-[40%]"
        value={time}
        onChange={handleTimeChange}
        min={30}
        max={120}
      />
    </motion.div>
  );
};

export default TimeChanger;
