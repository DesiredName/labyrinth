import { forwardRef } from 'react';

interface UIMenuProps extends React.MenuHTMLAttributes<HTMLMenuElement> {
  items?: UIMenuSubitem[];
}

interface UIMenuSubitem {
  to: () => React.ReactNode;
  items?: UIMenuSubitem[];
  level?: number;
}

const UIMenuSubitem = ({ to, items, level = 0 }: UIMenuSubitem) => {
  return (
    <li data-level={level}>
      {to()}
      {items?.length && (
        <menu>
          {items.map((subitem, idx) => (
            <UIMenuSubitem
              key={[level, idx].join('-')}
              level={level + 1}
              {...subitem}
            />
          ))}
        </menu>
      )}
    </li>
  );
};

const UIMenu = forwardRef<HTMLMenuElement, UIMenuProps>(
  ({ items, ...props }: UIMenuProps, ref) => {
    const level = 0;

    return (
      <menu ref={ref} key={level} {...props} data-level={level}>
        {items?.map((subitem, idx) => (
          <UIMenuSubitem
            key={[level, idx].join('-')}
            level={level + 1}
            {...subitem}
          />
        ))}
      </menu>
    );
  },
);

export { UIMenu };
export type { UIMenuProps };
