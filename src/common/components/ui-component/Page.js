import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import Head from 'next/head';

// material-ui
import { Box } from '@mui/material';

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | AfyaAPP - Electronic Medical Record System`}</title>
      {meta}
    </Head>
    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.displayName = 'Page';

Page.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.node,
  title: PropTypes.string
};

export default Page;
