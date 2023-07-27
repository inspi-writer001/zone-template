import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CareerContactInfo() {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 5, md: 10 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography variant="h2">In Kontakt kommen</Typography>

      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          mb: { xs: 3, md: 5 },
        }}
      >
        Wir würden gerne darüber sprechen, wie wir Ihnen helfen können.
      </Typography>

      <Stack spacing={{ xs: 3, md: 5 }} direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Email</Typography>

          <Link variant="body2" color="inherit" href="mailto:hello@example.com">
            biuro@jpglobetrade.pl
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Telefon</Typography>

          <Typography variant="body2">+48 666 838 711</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Adresse</Typography>

          <Typography variant="body2">
            Wir würden gerne darüber sprechen, wie wir Ihnen helfen können.
          </Typography>
        </Stack>

        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Typography variant="subtitle2">Follow Us</Typography>

          <Stack direction="row">
            {_socials.map((social) => (
              <IconButton key={social.value} color="inherit">
                <Iconify icon={social.icon} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
