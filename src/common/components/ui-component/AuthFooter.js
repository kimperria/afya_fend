// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography
      variant="subtitle2"
      component={Link}
      href="https://kimanijohn.netlify.app/"
      target="_blank"
      underline="hover"
    >
      Kimani John
    </Typography>
    <Typography
      variant="subtitle2"
      component={Link}
      //   href="https://codedthemes.com"
      target="_blank"
      underline="hover"
    >
      &copy; vernicearts
    </Typography>
  </Stack>
);

export default AuthFooter;
