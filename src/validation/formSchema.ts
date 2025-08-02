import { z } from 'zod';

export const formSchema = z.object({
  power: z.coerce
    .number({
      error: (issue) =>
        issue.input === undefined
          ? 'components.inputComponent.errors.powerRequired'
          : 'components.inputComponent.errors.powerInvalid'
    })
    .min(1, { error: 'components.inputComponent.errors.powerMin' })
    .max(1000000, { error: 'components.inputComponent.errors.powerMax' }),
  price: z.coerce
    .number({
      error: (issue) =>
        issue.input === undefined
          ? 'components.inputComponent.errors.priceRequired'
          : 'components.inputComponent.errors.priceInvalid'
    })
    .min(0.01, { error: 'components.inputComponent.errors.priceMin' })
    .max(100, { error: 'components.inputComponent.errors.priceMax' })
});
