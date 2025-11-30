import { UIButton } from '@webx/ui';
import { useDialogs } from '../../provider/Dialogs/useDialogs';

const WebsitesToolbar = () => {
  const { openDialog } = useDialogs();
  return (
    <div>
      <UIButton
        onClick={() =>
          openDialog({
            id: 'create_campaign',
            component: <div>create campaign</div>,
          })
        }
      >
        Create
      </UIButton>
    </div>
  );
};

export { WebsitesToolbar };
