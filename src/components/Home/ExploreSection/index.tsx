import React from 'react';
import Card from './components/Card';
import IntroductionSvg from './components/IntroductionSvg';
import BasicsSvg from './components/BasicsSvg';
import CoreConceptsSvg from './components/CoreConceptsSvg';
import BuildingModuleSvg from './components/BuildingModuleSvg';
import RunNodeSvg from './components/RunNodeSvg';
import ModulesSvg from './components/ModulesSvg';

const ExploreSection = () => {
  const items = [
    {
      href: '/',
      key: 'Introduction',
      icon: <IntroductionSvg />,
      label: 'High-level overview of the Gotabit SDK.',
    },
    {
      href: '/',
      key: 'BasicsSvg',
      icon: <BasicsSvg />,
      label: 'Anatomy of a blockchain, transaction lifecycle, accounts and more.',
    },
    {
      href: '/',
      key: 'Core Concepts',
      icon: <CoreConceptsSvg />,
      label: 'Read about the core concepts like baseapp, the store, or the server.',
    },
    {
      href: '/',
      key: 'Building Modules',
      icon: <BuildingModuleSvg />,
      label: 'Discover how to build modules for the Gotabit SDK.',
    },
    {
      href: '/',
      key: 'Running a Node',
      icon: <RunNodeSvg />,
      label: 'Dapp & Contract',
    },
    {
      href: '/',
      key: 'Modules',
      icon: <ModulesSvg />,
      label: 'Explore existing modules to build your application with.',
    },
  ];
  return (
    <div>
      <div className="row">
        {items.map((item) => (
          <Card key={item.key} href={item.href} title={item.key} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
