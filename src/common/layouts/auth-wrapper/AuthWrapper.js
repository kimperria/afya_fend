'use client';
import { styled } from '@mui/material/styles';

const AuthWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minHeight: '100vh'
}));

export default AuthWrapper;
