import { z } from 'zod';

export const createPropertySchema = z
  .object({
    name: z.string(),
    description: z.string().min(5),
    area: z.number().positive(),
  })
  .required();

export type createPropertyZodDto = z.infer<typeof createPropertySchema>;
