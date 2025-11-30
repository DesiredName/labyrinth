import { UIButton } from '@webx/ui';
import { useDialogs } from '../../provider/Dialogs/useDialogs';

const WebsitesToolbar = () => {
  const { openDialog } = useDialogs();
  return (
    <div>
      <UIButton onClick={() => openDialog('create_campaign')}>Create</UIButton>
    </div>
  );
};

export { WebsitesToolbar };
