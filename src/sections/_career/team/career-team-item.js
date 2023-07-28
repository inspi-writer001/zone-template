import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { Card, Grid, CardMedia } from '@mui/material';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: alpha(theme.palette.grey[900], 0.88),
    endColor: alpha(theme.palette.grey[900], 0.88),
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

const members = [
  {
    name: 'Grzegorz Łuczak ',
    image: '/assets/images/portrait/ceo.png',
    role: 'CEO',
  },
  { name: 'Agnieszka ', image: '/assets/images/portrait/cfo.png', role: 'CFO' },
  {
    name: 'Paulina ',
    image: '/assets/images/portrait/general-manager.png',
    role: 'General Manager',
  },
];
export default function CareerTeamItem({ member }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2}>
        {members.map((team) => (
          <Grid item md={4}>
            <Card>
              <StyledOverlay>
                <Box
                  sx={{
                    top: 0,
                    bottom: 0,
                    zIndex: 9,
                    m: 'auto',
                    position: 'absolute',
                    color: 'common.white',
                  }}
                >
                  <Typography variant="h6" align="center">
                    {team.name}
                  </Typography>

                  <Typography variant="body2" align="center" sx={{ opacity: 0.72, pb: 1 }}>
                    {team.role}
                  </Typography>
                </Box>
              </StyledOverlay>

              <CardMedia component="img" image={team.image} alt={team.name} height="500px" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CareerTeamItem.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    role: PropTypes.string,
  }),
};
