import { type SVGProps } from 'react';
import * as PhosphorIcons from 'phosphor-react';

interface IconProps extends SVGProps<SVGElement> {
  name: keyof typeof PhosphorIcons;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const PhosphorIcon = (() => PhosphorIcons[name])() as unknown as React.FC;

  return <PhosphorIcon id={name} data-testid={`icon-${name}`} {...props} />;
};

export default Icon;
