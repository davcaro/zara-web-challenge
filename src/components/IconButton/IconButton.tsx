import { FC, MouseEvent } from 'react';
import { Icon } from '@/components/Icon';
import { PropTypes } from './IconButton.types';
import { StyledButton } from './IconButton.styles';

export const IconButton: FC<PropTypes> = ({ onClick, icon, alt, size, ...props }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <StyledButton onClick={handleClick} {...props}>
      <Icon src={icon} alt={alt} size={size} />
    </StyledButton>
  );
};
