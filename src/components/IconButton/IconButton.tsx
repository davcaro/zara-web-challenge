import { FC, MouseEvent } from 'react';
import { ICON_SIZE, PropTypes } from './IconButton.types';
import { StyledButton } from './IconButton.styles';

export const IconButton: FC<PropTypes> = ({ onClick, icon: Icon, size = ICON_SIZE.MEDIUM, ...props }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.(e);
  };

  return (
    <StyledButton onClick={handleClick} size={size} {...props}>
      <Icon />
    </StyledButton>
  );
};
