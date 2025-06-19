import { useTranslation } from 'react-i18next';

import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

interface InputComponentProps {
  setHourlyResult: (result: number | undefined) => void;
}

export function InputComponent({ setHourlyResult }: InputComponentProps) {
  const { t } = useTranslation();
  return (
    <Box gap={3} component="form" display="flex" flexDirection="column" alignItems="center">
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Stack direction="column">
          <InputLabel htmlFor="power-input" sx={{ paddingLeft: 1 }}>
            <Typography variant="body1" color="text.tertiary">
              {t('components.inputComponent.labelPower')}
            </Typography>
          </InputLabel>
          <OutlinedInput
            id="power-input"
            defaultValue="0"
            endAdornment={
              <InputAdornment position="end">
                <Typography variant="body1" color="text.tertiary">
                  kW
                </Typography>
              </InputAdornment>
            }
          />
        </Stack>
        <Stack direction="column">
          <InputLabel htmlFor="price-input" sx={{ paddingLeft: 1 }}>
            <Typography variant="body1" color="text.tertiary">
              {t('components.inputComponent.labelPrice')}
            </Typography>
          </InputLabel>
          <OutlinedInput
            id="price-input"
            defaultValue="0"
            endAdornment={
              <InputAdornment position="end">
                <Typography variant="body1" color="text.tertiary">
                  €/kWh
                </Typography>
              </InputAdornment>
            }
          />
        </Stack>
      </Stack>
      <Button variant="outlined" type="submit">
        <Typography textTransform="uppercase">
          {t('components.inputComponent.calculate')}
        </Typography>
      </Button>
    </Box>
  );
}
