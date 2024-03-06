import styled from 'styled-components';
import * as media from '@/theme/media-queries.ts';
import typography from '@/theme/typography.styles';
import { Text } from '@/components/Text';

export const StyledSection = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--colors-black);

  ${media.gteMediumMedia} {
    justify-content: center;
  }

  /* Notched corner */
  &:after {
    content: '';
    position: absolute;
    background-color: var(--colors-white);

    width: 2.4rem;
    height: 2.4rem;
    right: -1.2rem;
    bottom: -1.2rem;
    transform: rotate(45deg);
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  ${media.gteMediumMedia} {
    max-width: 96rem;
  }
  ${media.gteSmallMedia} {
    gap: var(--spacing-48);
  }
  ${media.smallMedia} {
    padding-right: var(--spacing-48);
  }
  ${media.lteExtraSmallMedia} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 32rem;
  height: 32rem;
  object-fit: cover;

  ${media.smallMedia} {
    width: 27.8rem;
    height: 27.8rem;
  }
  ${media.lteExtraSmallMedia} {
    width: 100%;
    height: auto;
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
  width: 100%;
  box-sizing: border-box;
  color: var(--colors-white);

  ${media.lteExtraSmallMedia} {
    padding: var(--spacing-24) var(--spacing-16) var(--spacing-48);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-16);
`;

export const StyledHeading = styled(Text)`
  ${media.lteSmallMedia} {
    ${typography.h2};
  }
`;
