import { useDialogs } from '../../provider/Dialogs/useDialogs';

const DialogHost = () => {
  const { dialogs } = useDialogs();
  return <div>{JSON.stringify([...dialogs])}</div>;
};

export { DialogHost };
