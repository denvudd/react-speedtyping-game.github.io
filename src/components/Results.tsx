import { motion } from "framer-motion";
import { formatPercentage } from "../utils/formatPercentage";

const Results = ({
  errors,
  accuracy,
  total,
}: {
  errors: number;
  accuracy: number;
  total: number;
}) => {
  return (
    <ul className="flex flex-col items-center text-primary-400 space-y-3 mt-10">
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0 }}
        className="text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={
          (accuracy >= 80 && `text-green-500`) ||
          (accuracy >= 50 ? `text-yellow-400` : `text-red-500`)
        }
      >
        Accuracy: <strong>{formatPercentage(accuracy)}</strong>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="text-red-500"
      >
        Errors: <strong>{errors}</strong>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        className=""
      >
        Total Typed: <strong>{total}</strong>
      </motion.li>
    </ul>
  );
};

export default Results;
