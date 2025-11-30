import { createContext } from 'react';
import type { DialogID } from './DialogsProvider';

type DialogsContextType = {
  dialogs: Set<DialogID>;
  openDialog: (id: DialogID) => void;
  closeDialog: (id: DialogID) => void;
};

const DialogsContext = createContext<DialogsContextType | null>(null);

export { DialogsContext };
export type { DialogsContextType };
