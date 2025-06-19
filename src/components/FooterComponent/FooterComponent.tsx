import { useTranslation } from 'react-i18next';

import CopyrightIcon from '@mui/icons-material/Copyright';
import { Divider, Link, Stack, Typography } from '@mui/material';

export default function FooterComponent() {
  const { t } = useTranslation();
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={1}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 2,
        marginTop: 2
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <CopyrightIcon fontSize="small" />
        <Typography>
          <Link href="https://github.com/macolmenerori" target="_blank" rel="noopener">
            macolmenerori
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Stack>
      <Typography>
        <Link href="https://github.com/macolmenerori/electrocalc" target="_blank" rel="noopener">
          {t('components.footer.gitHubProject')}
        </Link>
      </Typography>
      <iframe
        src="https://github.com/sponsors/macolmenerori/button"
        title="Sponsor macolmenerori"
        height="32"
        width="114"
        style={{ border: 0, borderRadius: '6px' }}
      ></iframe>
    </Stack>
  );
}
