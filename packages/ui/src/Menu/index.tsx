import { forwardRef } from 'react';

interface UIMenuProps extends React.MenuHTMLAttributes<HTMLMenuElement> {
  items: UIMenuEntry[];
}

interface UIMenuEntry {
  to: () => React.ReactNode;
  items?: UIMenuProps[];
}

const MenuEntry = (props: UIMenuEntry) => (
  <li>
    <div>{props.to()}</div>
    {props.items &&
      props.items.map((submenu, index) => <UIMenu key={index} {...submenu} />)}
  </li>
);

const UIMenu = forwardRef<HTMLMenuElement, UIMenuProps>(
  ({ items: entries, ...props }: UIMenuProps, ref) => {
    return (
      <menu ref={ref} {...props}>
        {entries.map((entry) => (
          <MenuEntry {...entry} />
        ))}
      </menu>
    );
  },
);

export { UIMenu };
export type { UIMenuProps };
