import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { AppBar, Box, Stack, Typography } from '@mui/material';

import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';

export function Navbar() {
  return (
    <AppBar position="static" component="nav" sx={{ padding: '0.35rem 1rem' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1}>
          <ElectricBoltIcon />
          <Typography textAlign="center" justifySelf="center" color="textSecondary" variant="h5">
            Electrocalc
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignSelf="end">
          <LanguageSwitcher />
          <ThemeToggle />
        </Stack>
      </Box>
    </AppBar>
  );
}
