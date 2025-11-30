import { useEffect, useRef } from 'react';
import type {
  DialogID,
  DialogItem,
} from '../../provider/Dialogs/DialogsProvider';

interface DialogInstanceType extends DialogItem {
  close: (id: DialogID) => void;
}

function DialogInstance({ id, component, close }: DialogInstanceType) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    try {
      dialog.showModal();
    } catch (e) {
      if (e instanceof DOMException) {
        dialog.showModal();
      }
    }

    const handleClose = () => close(id);

    dialog.addEventListener('close', handleClose);

    return () => dialog.removeEventListener('close', handleClose);
  }, [id, close]);

  return (
    <dialog closedby="any" ref={dialogRef}>
      {component}
    </dialog>
  );
}

export { DialogInstance };
