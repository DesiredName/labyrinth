import { motion } from 'framer-motion';
import { clsxtw } from '../utils/clsxtw';

type PageTransitionProps = React.ComponentPropsWithoutRef<'div'>;

function PageTransition({ className, children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(-10px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      exit={{ opacity: 0, transform: 'translateY(-10px)' }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className={clsxtw(className, 'page-transition')}
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
