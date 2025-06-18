import { Stack } from '@mui/material';

import { Navbar } from '@/components/Navbar/Navbar';

export function MainLayout() {
  return (
    <Stack spacing={3}>
      <header>
        <Navbar />
      </header>
    </Stack>
  );
}
