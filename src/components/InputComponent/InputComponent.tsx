import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';
import { z } from 'zod';

import { formSchema } from '@/validation/formSchema';

interface InputComponentProps {
  setHourlyResult: (result: number | undefined) => void;
}

type FormData = z.infer<typeof formSchema>;

export function InputComponent({ setHourlyResult }: InputComponentProps) {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      power: undefined,
      price: undefined
    }
  });

  const onSubmit = (data: FormData) => {
    // Calculate hourly result (power * price)
    const result = (data.power / 1000) * data.price;
    setHourlyResult(result);
  };

  return (
    <Box
      gap={3}
      component="form"
      display="flex"
      flexDirection="column"
      alignItems="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Stack direction="column">
          <InputLabel htmlFor="power-input" sx={{ paddingLeft: 1 }}>
            <Typography variant="body1" color="text.tertiary">
              {t('components.inputComponent.labelPower')}
            </Typography>
          </InputLabel>
          <Controller
            name="power"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="power-input"
                type="number"
                inputProps={{
                  step: 0.1,
                  min: 0
                }}
                error={!!errors.power}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography variant="body1" color="text.tertiary">
                      W
                    </Typography>
                  </InputAdornment>
                }
              />
            )}
          />
          {errors.power && <FormHelperText error>{t(errors.power.message!)}</FormHelperText>}
        </Stack>
        <Stack direction="column">
          <InputLabel htmlFor="price-input" sx={{ paddingLeft: 1 }}>
            <Typography variant="body1" color="text.tertiary">
              {t('components.inputComponent.labelPrice')}
            </Typography>
          </InputLabel>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="price-input"
                type="number"
                inputProps={{
                  step: 0.01,
                  min: 0
                }}
                error={!!errors.price}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography variant="body1" color="text.tertiary">
                      €/kWh
                    </Typography>
                  </InputAdornment>
                }
              />
            )}
          />
          {errors.price && <FormHelperText error>{t(errors.price.message!)}</FormHelperText>}
        </Stack>
      </Stack>
      <Button variant="outlined" type="submit" disabled={isSubmitting}>
        <Typography textTransform="uppercase">
          {t('components.inputComponent.calculate')}
        </Typography>
      </Button>
    </Box>
  );
}
