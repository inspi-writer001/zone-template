// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import { DatePicker } from '@mui/lab';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Radio,
  Stack,
  Checkbox,
  FormGroup,
  FormLabel,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';

export default function CareerJobModal(props) {
  const navigate = useNavigate();
  const { open, onClose } = props;
  const handleClose = () => {
    if (onClose) {
      onClose();
      navigate(0);
    }
  };

  const [formData, setFormData] = useState({
    imię: '',
    nazwisko: '',
    email: '',
    DOB: '',
    telefon: '',
    Wykształcenie: '',
    Prawo_jazdy: '',
    license_category: '',
    Szalowanie: false,
    Rusztowanie: false,
    Tynkowanie: false,
    Murowanie: false,
    Wylewanie_stropów: false,
    Czytanie_rysunku_technicznego: false,
    Montowanie_elementów: false,
    Prace_wykończeniowe: false,
    Prace_remontowe: false,
    Prace_rozbiórkowe: false,
    Doświadczenie_w_latach: '',
    Niemiecki: false,
    Angielski: false,
    Ukraiński: false,
    Rosyjski: false,
    Inny: false,
    Dodatkowy_opis: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    // handleClose();
    const html = `<html><head> </head><body style="font-family: Arial, sans-serif; background-color: rgb(6, 42, 9); padding: 30px 50px 0px 50px; "> <table style="margin: 0 auto"> <tr> <td style="text-align: center">  <img style="max-width: 100px; max-height: 100px" src="https://healthgotechnologies.com/healthgo.png" alt="Your Brand Logo" /> </td> </tr> </table> <h1 style="color: #ffffff; margin-top: 50px">Recover Password</h1> <p style="color: #ffffff; font-weight: 100; font-size: 13px; margin-top: 60px;">Email Verification Token</p><p style="color: #07a53d; font-weight: 700; font-size: 35px">${formData}</p> <p style=" color: #ffffff; font-weight: 100; font-size: 13px; line-height: 40px;"> The verification code will be valid for 30 minutes. Please do not share this code with anyone </p> <p style="color: #ffffff; font-weight: 100; font-size: 13px; line-height: 40px;">Don't recognise this activity? Please ignore this mail and contact<span><a style="color: #07a53d" href="mailto:hello@healthgotecnologies.com">customer support</a> </span> immediately. </p> <p style=" color: #ffffff; font-weight: 100; font-size: 13px; line-height: 40px; padding-top: 20px; " > <i>This is an automated message, please do not reply.</i> </p> <hr style="border: 1px solid #07a53d; margin: 20px 0" /> <p style=" text-align: center; color: #ffffff; font-weight: 100; font-size: 13px; margin-bottom: 50px; " > Stay connected! </p> <table style="margin: 0 auto"> <tr> <td style="text-align: center"> <a href="https://www.linkedin.com/company/healthgohq/"> <img src="https://healthgotechnologies.com/static/media/icon6.015f9fb4f4e8691aacff930e75c9c4a3.svg" alt="linkedin" style="width: 50px; margin: 0 30px" /> </a> </td> <td style="text-align: center"> <a href="https://www.instagram.com/healthgohq/"> <img src="https://healthgotechnologies.com/static/media/icon5.292f0f315388997aa525cc5f6efe5658.svg" alt="instagram"style="width: 50px; margin: 0 30px" /> </a> </td> <td style="text-align: center"> <a href="https://twitter.com/healthgoHQ"> <img src="https://healthgotechnologies.com/static/media/icon3.a52925e458837588995538937001bd3b.svg"              alt="twitter"              style="width: 50px; margin: 0 30px"/></a></td><td style="text-align: center"><a href="https://t.me/HealthgoHQ"><img src="https://healthgotechnologies.com/static/media/icon2.10570ac31b62e2497a82add241681ef5.svg" alt="telegram" style="width: 50px; margin: 0 30px"/></a></td> <td style="text-align: center"> <a href="https://medium.com/@HealthGO_HQ"> <img src="https://healthgotechnologies.com/static/media/icon4.3a601309041de41f24700ae7f934618d.svg" alt="medium" style="width: 50px; margin: 0 30px"/></a></td></tr></table></body></html>`;
    const email = 'emmyconceptng@gmail.com';
    const form = new FormData();
    form.append('api_key', 'jzCmcoutSpnsFTDGMdJHwARKhLQOga');
    form.append('from_name', 'Healthgo Technologies');
    form.append('reply_to', 'noreply@healthgotechnologies.com');
    form.append('from_email', 'noreply@healthgotechnologies.com');
    form.append('title', 'Recover Password');
    form.append('subject', 'Recover Password');
    form.append('send_campaign', 1);
    form.append('track_clicks', 1);
    form.append('html_text', html);
    form.append('emails', email);

    await axios
      .post(`https://mail.tribearc.com/api/campaigns/send_now.php`, form)
      .then((response) => {
        console.log(formData);
        console.log(response);
      });
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Apply for Job</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
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
              name="DOB"
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
                name="Wykształcenie"
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
                name="Prawo_jazdy"
                value={formData.license}
                onChange={handleInputChange}
              >
                <FormControlLabel value="Tak" control={<Radio />} label="Tak" />
                <FormControlLabel value="Nie" control={<Radio />} label="Nie" />
              </RadioGroup>
            </FormControl>
            {formData.Prawo_jazdy === 'Tak' && (
              <FormControl component="fieldset">
                <FormLabel component="legend">Kategoria Prawa Jazdy:</FormLabel>
                <RadioGroup
                  aria-label="license_category"
                  name="Kategoria_licencji"
                  value={formData.licenseCategory}
                  onChange={handleInputChange}
                >
                  <FormControlLabel value="B" control={<Radio />} label="B" />
                  <FormControlLabel value="C" control={<Radio />} label="C" />
                </RadioGroup>
              </FormControl>
            )}
            <FormControl component="fieldset">
              <FormLabel component="legend">Umiejętności:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  name="Szalowanie"
                  value="Szalowanie"
                  checked={formData.Szalowanie}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Szalowanie"
                />
                <FormControlLabel
                  name="Rusztowanie"
                  value="Rusztowanie"
                  checked={formData.Rusztowanie}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Rusztowanie"
                />
                <FormControlLabel
                  name="Tynkowanie"
                  value="Tynkowanie"
                  checked={formData.Tynkowanie}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Tynkowanie"
                />
                <FormControlLabel
                  name="Murowanie"
                  value="Murowanie"
                  checked={formData.Murowanie}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Murowanie"
                />
                <FormControlLabel
                  name="Wylewanie_stropów"
                  value="Wylewanie stropów"
                  checked={formData.Wylewanie_stropów}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Wylewanie stropów"
                />

                <FormControlLabel
                  value="Czytanie rysunku technicznego"
                  name="Czytanie_rysunku_technicznego"
                  checked={formData.Czytanie_rysunku_technicznego}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Czytanie rysunku technicznego"
                />
                <FormControlLabel
                  value="Montowanie elementów"
                  name="Montowanie_elementów"
                  checked={formData.Montowanie_elementów}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Montowanie elementów"
                />
                <FormControlLabel
                  value="Prace wykończeniowe"
                  name="Prace_wykończeniowe"
                  checked={formData.Prace_wykończeniowe}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Prace wykończeniowe"
                />

                <FormControlLabel
                  value="Prace remontowe"
                  name="Prace_remontowe"
                  checked={formData.Prace_remontowe}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Prace remontowe"
                />
                <FormControlLabel
                  value="Prace rozbiórkowe"
                  name="Prace_rozbiórkowe"
                  checked={formData.Prace_rozbiórkowe}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Prace rozbiórkowe"
                />
              </FormGroup>
            </FormControl>
            <TextField
              label="Doświadczenie w latach:"
              name="Doświadczenie_w_latach:"
              onChange={handleInputChange}
              value={formData.experience}
              fullWidth
              variant="outlined"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Język obcy:</FormLabel>
              <FormGroup>
                <FormControlLabel
                  value="Niemiecki"
                  name="Niemiecki"
                  onChange={handleInputChange}
                  checked={formData.Niemiecki}
                  control={<Checkbox />}
                  label="Niemiecki"
                />
                <FormControlLabel
                  value="Angielski"
                  name="Angielski"
                  checked={formData.Angielski}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Angielski"
                />
                <FormControlLabel
                  value="Ukraiński"
                  name="Ukraiński"
                  checked={formData.Ukraiński}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Ukraiński"
                />
                <FormControlLabel
                  value="Rosyjski"
                  name="Rosyjski"
                  checked={formData.Rosyjski}
                  onChange={handleInputChange}
                  control={<Checkbox />}
                  label="Rosyjski"
                />
                <FormControlLabel
                  value="Inny"
                  checked={formData.Inny}
                  onChange={handleInputChange}
                  name="Inny"
                  control={<Checkbox />}
                  label="Inny"
                />
              </FormGroup>
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
          Stornieren
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Einreichen
        </Button>
      </DialogActions>
    </Dialog>
  );
}

CareerJobModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
