import { z } from 'zod';

export const formSchema = z.object({
  power: z.coerce
    .number({
      required_error: 'components.inputComponent.errors.powerRequired',
      invalid_type_error: 'components.inputComponent.errors.powerInvalid'
    })
    .min(1, 'components.inputComponent.errors.powerMin')
    .max(1000000, 'components.inputComponent.errors.powerMax'),
  price: z.coerce
    .number({
      required_error: 'components.inputComponent.errors.priceRequired',
      invalid_type_error: 'components.inputComponent.errors.priceInvalid'
    })
    .min(0.01, 'components.inputComponent.errors.priceMin')
    .max(100, 'components.inputComponent.errors.priceMax')
});
