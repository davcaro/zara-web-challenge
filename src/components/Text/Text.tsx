import { FC, PropsWithChildren } from 'react';
import { PropTypes } from './Text.types';
import { NativeText } from './Text.styles';

export const Text: FC<PropsWithChildren<PropTypes>> = ({ level, children, ...props }) => {
  const asTarget = ['h1', 'h2'].includes(level) ? level : 'p';

  return (
    <NativeText level={level} as={asTarget} {...props}>
      {children}
    </NativeText>
  );
};
