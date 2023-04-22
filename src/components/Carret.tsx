import { motion } from "framer-motion";

const Carret = () => {
  return (
    <motion.div
      className="inline-block bg-primary-500 w-0.5 h-[29px] mb-[-1.5px]"
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeIn" }}
    ></motion.div>
  );
};

export default Carret;
