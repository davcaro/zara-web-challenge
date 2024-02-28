import styled from 'styled-components';
import * as media from '@/theme/media-queries.ts';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 18.9rem;

  ${media.lteSmallMedia} {
    width: 17.2rem;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 19rem;
  object-fit: cover;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0.5rem;
  margin: 0;
  border: 0;
  background-color: var(--colors-marvel-red);
`;

export const CharacterInfo = styled.section`
  position: relative;
  box-sizing: border-box;
  background-color: var(--colors-black);

  width: 100%;
  padding: var(--spacing-16);
  padding-bottom: var(--spacing-24);

  /* Notched corner */
  &:after {
    content: '';
    position: absolute;
    background-color: var(--colors-white);

    width: 1.2rem;
    height: 1.2rem;
    right: -0.6rem;
    bottom: -0.6rem;
    transform: rotate(45deg);
  }
`;

export const CharacterName = styled.span`
  font-size: 1.4rem;
  color: var(--colors-white);
`;
