import * as PhosphorIcons from '@phosphor-icons/react';

interface IconProps extends PhosphorIcons.IconProps {
  name: keyof typeof PhosphorIcons;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const PhosphorIcon = (() => PhosphorIcons[name])() as React.FC;

  return <PhosphorIcon id={name} data-testid={`icon-${name}`} {...props} />;
};

export default Icon;
