import { FC, useState } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
    title: string;
    percentage: number;
    description: string;
  }
  const SkillCard: FC<SkillCardProps> = ({ title, percentage, description }) => {
 
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[150px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.05 }} // Hover effect (slight zoom)
      initial={{ opacity: 0, y: 50 }} // Start position
      whileInView={{ opacity: 1, y: 0 }} // Animate only when in view
      viewport={{ once: true, amount: 0.2 }} // Runs animation once when 20% of the card is visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Card Container */}
      <motion.div
        className="relative w-full h-full transition-transform duration-500 transform-style-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Front Side */}
        <motion.div className="absolute inset-0 p-6 bg-[#3a3a4e] rounded-lg shadow-lg transition-all duration-500 hover:scale-105 backface-hidden">
          <h3 className="text-xl font-semibold text-[#f3c72c]">{title}</h3>
          <div className="progress-bar w-full h-2 bg-gray-400 mt-2">
            <div
              className="progress bg-[#f3c72c] h-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div className="absolute inset-0 p-6 bg-[#252535] rounded-lg shadow-lg flex items-center justify-center text-center transform rotate-y-180 backface-hidden">
          <p className="text-white">{description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
