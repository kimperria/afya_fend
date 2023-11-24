import PropTypes from 'prop-types';
import { useEffect, useMemo } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
  Container,
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
  Grid
} from '@mui/material';

// project imports
import { LAYOUT_CONST, drawerWidth } from '@/common/constants';

// redux
import { useDispatch, useSelector } from 'react-redux';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, layout }) => ({
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...(!open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft:
          layout === LAYOUT_CONST.VERTICAL_LAYOUT
            ? -(drawerWidth - 72)
            : '20px',
        width: `calc(100% -${drawerWidth}px)`,
        marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginTop: 88
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px',
        marginTop: 88
      }
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shorter
      }),
      marginLeft: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? '20px' : 0,
      marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.up('md')]: {
        marginTop: layout === LAYOUT_CONST.HORIZONTAL_LAYOUT ? 135 : 88
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        marginTop: 88
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        marginTop: 88
      }
    })
  })
);

const MainLayout = ({ children }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* sidebar */}
      <Grid container>
        <Grid item xs={12}>
          {/* App Bar */}
        </Grid>
        <Grid item xs={12} sx={{ position: 'relative' }}>
          {/* main content block */}
          <Main theme={theme}>{children}</Main>
        </Grid>
      </Grid>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
