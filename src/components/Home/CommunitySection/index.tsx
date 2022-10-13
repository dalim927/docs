import React from 'react';
import Card from './components/Card';
import DiscordIcon from './components/DiscordIcon';
import ForumsIcon from './components/ForumsIcon';
import GithubIcon from './components/GithubIcon';
import RedditIcon from './components/RedditIcon';
import TwitterIcon from './components/TwitterIcon';

const CommunitySection = () => {
  const items = [
    {
      href: 'https://github.com/gotabit/gotabitjs',
      icon: <GithubIcon />,
      key: 'GitHub',
      label: 'View our SDK, submit a PR, or report an issue.',
    },
    {
      href: 'https://discord.com/',
      icon: <DiscordIcon />,
      key: 'Discord',
      label: 'Join our Discord and chat with other Expo users.',
    },
    {
      href: 'https://twitter.com/',
      icon: <TwitterIcon />,
      key: 'Twitter',
      label: 'Follow Expo on Twitter for news and updates.',
    },
    {
      href: '/',
      icon: <ForumsIcon />,
      key: 'Forums',
      label: 'Ask or answer a question on the forums.',
    },
    {
      href: 'https://www.reddit.com/',
      icon: <RedditIcon />,
      key: 'Reddit',
      label: 'Get the latest on /r/expo.',
    },
  ];
  return (
    <div>
      <div className="row">
        {items.map((item) => (
          <Card key={item.key} href={item.href} icon={item.icon} title={item.key} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
