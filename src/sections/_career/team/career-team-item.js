import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import { Grid, Card, CardContent } from '@mui/material';

import { bgGradient } from 'src/theme/css';
import { RouterLink } from 'src/routes/components';

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
    name: 'Grzegorz Łuczak(CEO)',
    image: '/assets/images/portrait/ceo.png',
    role: 'CEO',
  },
  { name: 'Agnieszka (CFO)', image: '/assets/images/portrait/cfo.png', role: 'CFO' },
  {
    name: 'Paulina (Genral Manager)',
    image: '/assets/images/portrait/general-manager.png',
    role: 'General Manager',
  },
];
export default function CareerTeamItem() {
  return (
    <Box>
      <Grid
        container
        justifyContent="space-betwenn"
        spacing={2}
        sx={{
          borderRadius: 2,
        }}
      >
        {members.map((team) => (
          <Grid item>
            <Card>
              <CardMedia component="img" alt={team.name} image={team.image} height="400px" />
              <CardContent>
                <Stack
                  spacing={1}
                  sx={{
                    p: 3,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <Link component={RouterLink} href="#" color="primary.main" variant="h5">
                    {team.name}
                  </Link>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {team.role}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
