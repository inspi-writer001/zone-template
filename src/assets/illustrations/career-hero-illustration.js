import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { Card, CardMedia } from '@mui/material';

import Image from 'src/components/image';
import SvgColor from 'src/components/svg-color';
import { useHoverParallax } from 'src/hooks/use-hover-parallax';

import Icon from './pattern/icon';
import Label from './pattern/label';
import Character from './pattern/character';
import Pattern02 from './pattern/pattern-02';
import Pattern01 from './pattern/pattern-01';

// ----------------------------------------------------------------------

const stylesIcon = {
  width: 40,
  height: 40,
  color: 'common.black',
};

// ----------------------------------------------------------------------

// Responsive ----------------------------------------------------------

// Responsive ----------------------------------------------------------

function CareerHeroIllustration({ sx, ...other }) {
  const theme = useTheme();

  const { offsetX, offsetY, onMouseMoveHandler, onMouseLeaveHandler } = useHoverParallax();

  const BLUE = theme.palette.info.main;

  const GREEN = theme.palette.success.main;

  const YELLOW = theme.palette.warning.main;

  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, handle the error or fallback to user interaction
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <Box
      component={m.div}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      sx={{
        width: 564,
        height: 564,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      {/* 3D animation */}
      {/* 3D animation */}
    </Box>
  );
}

CareerHeroIllustration.propTypes = {
  sx: PropTypes.object,
};

export default memo(CareerHeroIllustration);
