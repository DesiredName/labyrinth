import { forwardRef } from 'react';

interface UIMenuProps extends React.MenuHTMLAttributes<HTMLMenuElement> {
  id: string;
  items: UIMenuEntry[];
}

interface UIMenuEntry {
  id: string;
  to: () => React.ReactNode;
  items?: UIMenuProps[];
}

const MenuEntry = ({ id, to, items }: UIMenuEntry) => (
  <li key={id}>
    <div>{to()}</div>
    {items?.map((submenu, idx) => (
      <UIMenu key={['sub', id, idx].join('_')} {...submenu} />
    ))}
  </li>
);

const UIMenu = forwardRef<HTMLMenuElement, UIMenuProps>(
  ({ id, items, ...props }: UIMenuProps, ref) => {
    return (
      <menu ref={ref} key={id} {...props}>
        {items.map((items, idx) => (
          <MenuEntry key={['sub', id, idx].join('_')} {...items} />
        ))}
      </menu>
    );
  },
);

export { UIMenu };
export type { UIMenuProps };
