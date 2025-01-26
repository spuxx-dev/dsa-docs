import type { Component } from 'solid-js';
import styles from './header.module.css';
import { For } from 'solid-js/web';

const links: { href: string; title: string; icon: string }[] = [
  { href: '/', title: 'Home', icon: 'tower' },
  { href: '/combat', title: 'Kampfregeln', icon: 'crossed-swords' },
];

interface Props {
  pathname: string;
}

export const Header: Component<Props> = (props) => {
  return (
    <header class={styles.header}>
      <nav>
        <For each={links}>
          {(item) => (
            <a
              href={item.href}
              title={item.title}
              data-active={props.pathname === item.href}
            >
              <span class={`ra ra-2x ra-${item.icon}`} />
            </a>
          )}
        </For>
      </nav>
    </header>
  );
};
