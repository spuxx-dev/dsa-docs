import type { Component, ParentProps } from 'solid-js';
import styles from './content.module.css';

interface Props extends ParentProps {}

export const Content: Component<Props> = (props) => {
  return <main class={styles.main}>{props.children}</main>;
};
