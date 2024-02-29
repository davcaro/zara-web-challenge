import styled from 'styled-components';
import { Text } from '@/components/Text';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  height: 19rem;
  object-fit: cover;
`;

export const Divider = styled.hr`
  height: 0.5rem;
  margin: var(--spacing-none);
  border: var(--spacing-none);
  background-color: var(--colors-marvel-red);
`;

export const CharacterInfo = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  background-color: var(--colors-black);

  box-sizing: border-box;
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

export const CharacterName = styled(Text)`
  color: var(--colors-white);
`;