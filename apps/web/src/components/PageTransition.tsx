import { motion } from 'framer-motion';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
