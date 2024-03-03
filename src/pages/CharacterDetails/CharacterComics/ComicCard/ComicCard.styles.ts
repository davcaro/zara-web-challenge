import styled from 'styled-components';
import * as media from '@/theme/media-queries';
import { weight } from '@/theme/typography.styles';
import { Text } from '@/components/Text';

export const Container = styled.li``;

export const Image = styled.img`
  width: 17.9rem;
  height: 26.9rem;
  object-fit: contain;

  ${media.smallMedia} {
    width: 16.9rem;
    height: 25.3rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 16.4rem;
    height: 24.8rem;
  }
`;

export const ComicTitle = styled(Text)`
  font-weight: ${weight.medium};

  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-8);
`;
