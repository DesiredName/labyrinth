import { useState } from 'react';
import { DialogsContext } from './DialogsContext';

type DialogID = 'create_campaign';
type DialogItem = {
  id: DialogID;
  component: React.ReactNode;
};

const DialogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dialogs, setDialogs] = useState<Map<DialogID, DialogItem>>(new Map());

  const openDialog = (item: DialogItem) => {
    if (dialogs.has(item.id)) return;

    setDialogs(new Map([...dialogs]).set(item.id, item));
  };

  const closeDialog = (id: DialogID) => {
    if (dialogs.has(id) !== true) return;

    const newDialogsList = new Map([...dialogs]);
    newDialogsList.delete(id);

    setDialogs(newDialogsList);
  };

  return (
    <DialogsContext.Provider value={{ dialogs, openDialog, closeDialog }}>
      {children}
    </DialogsContext.Provider>
  );
};

export { DialogsProvider };
export type { DialogID, DialogItem };
