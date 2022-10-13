import React from 'react'
import clsx from 'clsx';
import IntroductionSvg from './components/IntroductionSvg'
import DevelopmentSvg from './components/DevelopmentSvg'

import styles from './styles.module.css';

/**
 * Getting Started components
 * @returns
 */
const GettingStarted = (): JSX.Element => {

  const items = [
    {
      href: '/',
      key: 'Introduction to GotaBit',
      label: 'Learn about all the parts of the GotaBit',
      icon: <IntroductionSvg />,
    },
    {
      href: '/',
      key: 'Development tutorial',
      label: 'Build a complete blockchain application from scratch',
      icon: <DevelopmentSvg />,
    }
  ]

  return (
    // <div className={clsx(styles.GettingStartedWrap, 'container')}>
    <div className={styles.GettingStartedWrap}>
      <div className="row">
        {items.map(item => (
          <div className="col col--6" key={item.key}>
            <a className={styles.homeCard} href={item.href}>
              {item.icon}
              <div className={styles.homeCardCon}>
                <h3 className="docs-ellipsis">{item.key}</h3>
                <p className="docs-ellipsis">{item.label}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GettingStarted
