import { createContext } from 'react';
import type { DialogID, DialogItem } from './DialogsProvider';

type DialogsContextType = {
  dialogs: Map<DialogID, DialogItem>;
  openDialog: (item: DialogItem) => void;
  closeDialog: (id: DialogID) => void;
};

const DialogsContext = createContext<DialogsContextType | null>(null);

export { DialogsContext };
export type { DialogsContextType };
