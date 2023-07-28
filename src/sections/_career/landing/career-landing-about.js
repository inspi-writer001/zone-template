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
    content:
      'Bauarbeiten in Deutschland und Österreich zeichnen sich durch hohe Qualität, Präzision und fortschrittliche Techniken aus.',
  },
  {
    label: 'Quadratmeter',
    total: 15000,
    content:
      'Wir haben eine Vielzahl von Bauarbeiten erfolgreich abgeschlossen, darunter Neubauten, Renovierungen, Anbauten und viele weitere Projekte.',
  },
  {
    label: 'Erfahrungsjahre',
    total: 25,
    content:
      'Mit unserer langjährigen Erfahrung in der Baubranche können wir Ihnen erstklassige Dienstleistungen bieten und Ihre Projekte mit Fachwissen und Sorgfalt realisieren.',
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
            Kundenzufriedenheit
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Wer wir sind
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Kundenzufriedenheit Die Qualität von J&P ist erstklassig und herausragend. Als
            etabliertes Bauunternehmen haben wir einen unerschütterlichen Ruf für exzellente Arbeit
            und Kundenzufriedenheit aufgebaut. Unsere Fachleute und Handwerker sind hochqualifiziert
            und engagiert, um Projekte mit Präzision und Sorgfalt auszuführen. Wir verwenden nur die
            besten Materialien und modernsten Bautechniken, um sicherzustellen, dass jedes Projekt
            den höchsten Standards entspricht und lange Bestand hat. Kundenzufriedenheit steht bei
            uns an erster Stelle, und wir sind stolz darauf, pünktlich und innerhalb des Budgets zu
            liefern, ohne dabei die Qualität zu beeinträchtigen. Verlassen Sie sich auf J&P, um Ihr
            Bauvorhaben zuverlässig und professionell zu realisieren.
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
