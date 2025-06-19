import { useState } from 'react';

import { Container } from '@mui/material';

import { InputComponent } from '@/components/InputComponent/InputComponent';
import { ResultComponent } from '@/components/ResultComponent/ResultComponent';

export function CalculatorLayout() {
  const [hourlyResult, setHourlyResult] = useState<number | undefined>(undefined);
  return (
    <Container>
      <InputComponent setHourlyResult={setHourlyResult} />
      <ResultComponent hourlyResult={hourlyResult} />
    </Container>
  );
}
