import React from 'react'
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import GetUpdatesSvg from './components/GetUpdatesSvg';
import GetUpdatesBg from './components/GetUpdatesBg';

import styles from './styles.module.css';

/**
 * Get GotaBit updates components
 * @returns
 */
const GetUpdates = (): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.GetUpdatesWrap}>
      <GetUpdatesBg />
      <div className={clsx(styles.GetUpdatesRow, 'row', 'row--no-gutters')}>
        <GetUpdatesSvg />
        <div className={styles.GetUpdatesContent}>
          <div className={styles.GetUpdatesDocs}>
            <h3 className="docs-ellipsis">Get GotaBit updates</h3>
            <p className="docs-multi-ellipsis--l2">You will be notified of GotaBit updates, news and announcements.</p>
          </div>
          <div className={clsx(styles.GetUpdatesSubscribe, 'coldd')}>
            <input type="text" placeholder='youremail@gmail.com' />
            <button className={styles.GetUpdatesButton}>Subscribe</button>
          </div>
        </div>
      </div>
      {/* <div className={clsx(styles.GetUpdatesRow, 'row', 'row--no-gutters')}>
        <div className="col col--3">
          <GetUpdatesSvg />
        </div>
        <div className="col col--3">
          <div>
            <h3 className="docs-ellipsis">Get GotaBit updates</h3>
            <p className="docs-multi-ellipsis--l2">You will be notified of GotaBit updates, news and announcements.</p>
          </div>
        </div>
        <div className={clsx(styles.GetUpdatesSubscribe, 'col', 'col--6')}>
          <input type="text" placeholder='youremail@gmail.com' />
          <button className={styles.GetUpdatesButton}>Subscribe</button>
        </div>
      </div> */}
    </div>
  )
}

export default GetUpdates
