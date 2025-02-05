import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen luxury-gradient flex flex-col items-center justify-center text-center px-4">
      <motion.img
        src="/lovable-uploads/65cb38dc-8041-46c1-b7df-15be6189a417.png"
        alt="Luxury Lion Logo"
        className="w-32 h-32 mb-8 animate-pulse-gold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-gold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Billionaire Academy
      </motion.h1>
      
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Discover the secrets of millionaires and transform your reality
      </motion.p>
      
      <motion.button
        className="luxury-button"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={() => navigate("/courses")}
      >
        Explore Now
      </motion.button>
    </section>
  );
};

export default Hero;