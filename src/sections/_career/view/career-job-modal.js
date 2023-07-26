import { useState } from 'react';
import PropTypes from 'prop-types';

import { DatePicker } from '@mui/lab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack, Radio, FormLabel, RadioGroup, FormControl, FormControlLabel } from '@mui/material';

export default function CareerJobModal(props) {
  const { open, onClose } = props;
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    handleClose();
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Apply for Job</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ minWidth: 600 }}>
            <TextField
              label="Imię"
              name="imię"
              value={formData.firstName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />

            <TextField
              label="Nazwisko"
              name="nazwisko"
              value={formData.lastName}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
            <DatePicker
              label="Data urodzenia"
              value={formData.dob}
              onChange={handleInputChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField
              label="Telefon"
              name="telefon"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Wykształcenie:</FormLabel>
              <RadioGroup
                aria-label="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Podstawowe" control={<Radio />} label="Podstawowe" />
                <FormControlLabel value="Średnie" control={<Radio />} label="Średnie" />
                <FormControlLabel value="Wyższe" control={<Radio />} label="Wyższe" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Prawo jazdy:</FormLabel>
              <RadioGroup
                aria-label="license"
                name="license"
                value={formData.license}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Tak" control={<Radio />} label="Tak" />
                <FormControlLabel value="Nie" control={<Radio />} label="Nie" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Kategoria Prawa Jazdy:</FormLabel>
              <RadioGroup
                aria-label="license_category"
                name="license_category"
                value={formData.licenseCategory}
                onChange={handleInputChange}
              >
                <FormControlLabel value="B" control={<Radio />} label="B" />
                <FormControlLabel value="C" control={<Radio />} label="C" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Umiejętności:</FormLabel>
              <RadioGroup
                aria-label="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Szalowanie" control={<Radio />} label="Szalowanie" />
                <FormControlLabel value="Rusztowanie" control={<Radio />} label="Rusztowanie" />
                <FormControlLabel value="Tynkowanie" control={<Radio />} label="Tynkowanie" />
                <FormControlLabel value="Murowanie" control={<Radio />} label="Murowanie" />
                <FormControlLabel value="Wylewanie" control={<Radio />} label="Wylewanie" />
                <FormControlLabel value="stropów" control={<Radio />} label="stropów" />
                <FormControlLabel
                  value="Czytanie rysunku technicznego"
                  control={<Radio />}
                  label="Czytanie rysunku technicznego"
                />
                <FormControlLabel
                  value="Montowanie elementów"
                  control={<Radio />}
                  label="Montowanie elementów"
                />
                <FormControlLabel value="Prace" control={<Radio />} label="Prace" />
                <FormControlLabel value="wykończeniowe" control={<Radio />} label="wykończeniowe" />
                <FormControlLabel
                  value="Prace remontowe"
                  control={<Radio />}
                  label="Prace remontowe"
                />
                <FormControlLabel
                  value="Prace rozbiórkowe"
                  control={<Radio />}
                  label="Prace rozbiórkowe"
                />
                <FormControlLabel value="Umiejetnosci" control={<Radio />} label="Umiejetnosci" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Doświadczenie w latach:"
              name="Doświadczenie_w_latach:"
              value={formData.experience}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Język obcy:</FormLabel>
              <RadioGroup
                aria-label="foreign_language"
                name="foreign_language"
                value={formData.language}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Niemiecki" control={<Radio />} label="Niemiecki" />
                <FormControlLabel value="Angielski" control={<Radio />} label="Angielski" />
                <FormControlLabel value="Angielski" control={<Radio />} label="Angielski" />
                <FormControlLabel value="Ukraiński" control={<Radio />} label="Ukraiński" />
                <FormControlLabel value="Rosyjski" control={<Radio />} label="Rosyjski" />
                <FormControlLabel value="Inny" control={<Radio />} label="Inny" />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Dodatkowy Opis:"
              name="Dodatkowy_opis:"
              value={formData.coment}
              onChange={handleInputChange}
              fullWidth
              multiline
              row={4}
              variant="outlined"
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

CareerJobModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
