import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HeartFilledIcon } from '@/assets';
import { Text } from '@/components/Text';
import { Icon } from '@/components/Icon';
import { PropTypes } from './CharacterInfo.types';
import { StyledHeader, Image, Resume, Container, StyledHeading, Wrapper } from './CharacterInfo.styles';

export const CharacterInfo: FC<PropTypes> = ({ character }) => {
  const { t } = useTranslation('characters');

  return (
    <StyledHeader>
      <Container>
        <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />

        <Resume>
          <Wrapper>
            <StyledHeading level='h1'>{character.name}</StyledHeading>
            <Icon src={HeartFilledIcon} alt={t('remove-favorite')} />
          </Wrapper>
          <Text level='p1'>{character.description}</Text>
        </Resume>
      </Container>
    </StyledHeader>
  );
};
