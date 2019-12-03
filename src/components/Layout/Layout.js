import React from 'react';

import styles from './Layout.module.css';   // Import css module stylesheet as styles

const Layout = (props) => (
  <>
    <div>
      Toolbar, SideDrawer, Backdrop
    </div>
    <main className={styles.Content}>
      {props.children}
    </main>
  </>
);

export default Layout;