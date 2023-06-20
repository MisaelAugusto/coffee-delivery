import type * as PhosphorIcons from '@phosphor-icons/react';

import { Icon } from 'components';

import { Container, IconContainer, Text } from './styles';

interface IntroductionItemProps {
  iconName: keyof typeof PhosphorIcons;
  backgroundColor: string;
  text: string;
}

const IntroductionItem: React.FC<IntroductionItemProps> = ({ iconName, backgroundColor, text }) => {
  return (
    <Container>
      <IconContainer backgroundColor={backgroundColor}>
        <Icon name={iconName} size={16} weight="fill" color="white" />
      </IconContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export default IntroductionItem;
