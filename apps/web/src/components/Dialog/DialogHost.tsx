import { useDialogs } from '../../provider/Dialogs';
import { DialogInstance } from './DialogInstance';

const DialogHost = () => {
  const { dialogs, closeDialog } = useDialogs();

  return (
    <>
      {[...dialogs].map((d) => (
        <DialogInstance
          key={d[0]}
          id={d[0]}
          component={d[1].component}
          close={() => closeDialog(d[0])}
        />
      ))}
    </>
  );
};

export { DialogHost };
