import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function CareerLandingForRecruiters() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/bg.avif',
        }),
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
              JOB OFFERS
            </Typography>

            <Typography variant="h2">Do You want to Join Us? </Typography>

            <Typography sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis
              ullamcorper velit.
            </Typography>

            <Button
              variant="contained"
              size="large"
              color="primary"
              startIcon={<Iconify icon="carbon:document" />}
            >
              Upload Your CV
            </Button>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image alt="recruitment" src="/assets/illustrations/illustration_recruitment.svg" />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
