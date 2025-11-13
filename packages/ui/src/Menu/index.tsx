import React from 'react';

interface IMenuProps extends React.MenuHTMLAttributes<HTMLMenuElement> {
  items: IMenuEntry[];
}

interface IMenuEntry {
  to: () => React.ReactNode;
  items?: IMenuProps[];
}

const MenuEntry = (props: IMenuEntry) => (
  <li>
    <div>{props.to()}</div>
    {props.items &&
      props.items.map((submenu, index) => <Menu key={index} {...submenu} />)}
  </li>
);

const Menu = React.forwardRef<HTMLMenuElement, IMenuProps>(
  ({ items: entries, ...props }: IMenuProps, ref) => {
    return (
      <menu ref={ref} {...props}>
        {entries.map((entry) => (
          <MenuEntry {...entry} />
        ))}
      </menu>
    );
  },
);

export { Menu, type IMenuProps };
