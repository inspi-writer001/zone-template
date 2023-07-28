import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CareerTeamItem from './career-team-item';

// ----------------------------------------------------------------------

export default function CareerTeam({ members }) {
  return (
    <Stack
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Unser Team</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Team Text....
        </Typography>
      </Stack>

     
        
          <CareerTeamItem />
        
      
    </Stack>
  );
}

CareerTeam.propTypes = {
  members: PropTypes.array,
};
