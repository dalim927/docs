import React from 'react';

import styles from './styles.module.css';

interface CardProps {
  href: string;
  icon: React.ReactNode;
  col: number;
  title: string;
  label: string;
}

const Card = ({ href, icon, col, title, label }: CardProps) => {
  return (
    <div className={`col col--${col}`}>
      <a className={styles.exploreCard} href={href}>
        {icon}
        <div className={styles.exploreCardCon}>
          <h5 className="docs-ellipsis">{title}</h5>
          <p className="docs-multi-ellipsis--l2">{label}</p>
        </div>
      </a>
    </div>
  );
};

Card.defaultProps = {
  col: 4,
}

export default Card;
