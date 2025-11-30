import { useContext } from 'react';
import { DialogsContext, type DialogsContextType } from './DialogsContext';

const useDialogs = (): DialogsContextType => {
  const context = useContext(DialogsContext);
  if (!context) {
    throw new Error('useDialogs must be used within an DialogsProvider');
  }
  return context;
};

export { useDialogs };
