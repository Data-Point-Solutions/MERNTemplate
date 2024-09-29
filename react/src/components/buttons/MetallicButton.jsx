import React from 'react';
import { Button, useStyleConfig } from '@chakra-ui/react';

const colors = {
  blue: {
    light: '#4da3ff',
    main: '#3d7be5',
    dark: '#2a5bb4',
  },
  green: {
    light: '#4caf50',
    main: '#45a049',
    dark: '#357a38',
  },
  red: {
    light: '#f44336',
    main: '#d32f2f',
    dark: '#b71c1c',
  },
  gray: {
    light: '#9e9e9e',
    main: '#757575',
    dark: '#616161',
  },
};

const MetallicButton = ({ color = 'blue', ...props }) => {
  console.log('Rendering MetallicButton with props:', { color, ...props });

  const styles = useStyleConfig('MetallicButton', { color });

  return (
    <Button
      {...props}
      sx={{
        ...styles,
        background: `linear-gradient(180deg, ${colors[color].light} 0%, ${colors[color].main} 100%)`,
        color: 'white',
        _hover: {
          background: `linear-gradient(180deg, ${colors[color].main} 0%, ${colors[color].dark} 100%)`,
          boxShadow:
            '0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
        },
        _active: {
          background: `linear-gradient(180deg, ${colors[color].dark} 0%, ${colors[color].main} 100%)`,
          boxShadow:
            '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08)',
          transform: 'translateY(2px)',
        },
      }}
    />
  );
};

export default MetallicButton;
