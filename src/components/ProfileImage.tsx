import Image from "next/image";
import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <motion.div
      className="relative mt-6 w-[200px] h-[200px] rounded-full border-4 border-white shadow-xl overflow-hidden"
      animate={{
        y: [0, -5, 0], // Subtle floating effect
        rotate: [-2, 2, -2], // Slow rotational effect
        boxShadow: [
          "0px 0px 10px rgba(243, 199, 44, 0.4)",
          "0px 0px 20px rgba(243, 199, 44, 0.6)",
          "0px 0px 10px rgba(243, 199, 44, 0.4)",
        ], // Neon glowing effect
      }}
      transition={{
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{
        scale: 1.15, // Zoom-in on hover
        rotate: 3, // Slight tilt
        boxShadow: "0px 0px 50px rgba(243, 199, 44, 0.9)", // Strong glow on hover
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      {/* Gradient Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        animate={{
          background: [
            "radial-gradient(circle, rgba(243,199,44,0.2) 20%, transparent 80%)",
            "radial-gradient(circle, rgba(243,199,44,0.4) 40%, transparent 80%)",
            "radial-gradient(circle, rgba(243,199,44,0.2) 20%, transparent 80%)",
          ],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <Image
        src="/me2.jpeg"
        alt="Your Name"
        width={200}
        height={200}
        quality={100}
        priority
        className="rounded-full w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ProfileImage;
