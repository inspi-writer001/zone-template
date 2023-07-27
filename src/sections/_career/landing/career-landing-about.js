import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'Projekte',
    total: 108,
    content: 'Wir haben über 20 Projekte abgeschlossen.',
  },
  {
    label: 'Umsatz',
    total: 10000000,
    content: 'Wir haben eine Umschlagshäufigkeit von über 10 Millionen Euro.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'über 20 Jahre Bauerfahrung.',
  },
];

// ----------------------------------------------------------------------

export default function CareerLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Über uns
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Wer wir sind
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Bei J&P Globe Trade setzen wir uns dafür ein, Ihre Vision in die Realität umzusetzen.
            Als vertrauenswürdiges und erfahrenes Bauunternehmen sind wir darauf spezialisiert,
            hochwertige Wohnprojekte zu liefern, die genau auf Ihre individuellen Bedürfnisse
            zugeschnitten sind. Egal, ob Sie Ihr Traumhaus von Grund auf neu bauen oder eine
            bestehende Immobilie renovieren möchten - wir haben die Lösung für Sie.
          </Typography>

          <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Erfahren Sie mehr
          </Button>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
