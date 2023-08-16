import React from 'react';
import cn from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>;
};

export default Container;
