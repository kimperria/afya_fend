import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { icons } from '@/common/utils/icons';
import { useState } from 'react';
import { CheckBox } from '@mui/icons-material';
import Link from 'next/link';

// project imports
import AnimateButton from '../../ui-component/extended/AnimatedButton';

const AuthLogin = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const VisibilityIcon = icons.VisibilityIcon;
  const VisibilityOffIcon = icons.VisibilityOffIcon;

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form noValidate>
        <FormControl
          fullWidth
          error={Boolean()}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-email-login">
            Email Address / Username
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-email-login"
            type="email"
            name="email"
            label="Email Address / Username"
          />
          <FormHelperText error id="standard-weight-helper-text-email-login">
            Error
          </FormHelperText>
        </FormControl>

        <FormControl
          fullWidth
          error={Boolean()}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-password-login">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password-login"
            type={showPassword ? 'text' : 'password'}
            name="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText error id="standard-weight-helper-text-password-login">
            Error
          </FormHelperText>
        </FormControl>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <FormControlLabel
            control={
              <CheckBox
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                name="checked"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Typography
            variant="subtitle1"
            component={Link}
            href="#"
            color="secondary"
            sx={{ textDecoration: 'none' }}
          >
            Forgot password?
          </Typography>
        </Stack>

        <Box sx={{ mt: 3 }}>
          <FormHelperText error>Errors on form</FormHelperText>
        </Box>

        <Box sx={{ mt: 2 }}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Sign in
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default AuthLogin;
