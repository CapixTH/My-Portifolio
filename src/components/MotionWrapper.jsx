import { motion, AnimatePresence } from 'framer-motion';

const MotionWrapper = ({ children, locationKey }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={locationKey}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ minHeight: '60vh' }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default MotionWrapper;
