import { useState } from 'react';
import { DialogsContext } from './DialogsContext';

type DialogID = 'create_campaign';

const DialogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dialogs, setDialogs] = useState<Set<DialogID>>(new Set());

  const openDialog = (id: DialogID) => {
    if (dialogs.has(id)) return;

    setDialogs(new Set([...dialogs, id]));
  };

  const closeDialog = (id: DialogID) => {
    if (dialogs.has(id) !== true) return;

    const newDialogsList = [...dialogs].filter((d) => d != id);

    setDialogs(new Set(newDialogsList));
  };

  return (
    <DialogsContext.Provider value={{ dialogs, openDialog, closeDialog }}>
      {children}
    </DialogsContext.Provider>
  );
};

export { DialogsProvider };
export type { DialogID };
