import { useState } from 'react';
import { z } from 'zod';
import type { ZodObject } from 'zod';

export function useZodForm<T extends ZodObject<any>>(schema: T) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);

    if (!result.success) {
      const flat = result.error.flatten();
      const mapped: Record<string, string> = {};
      for (const [key, value] of Object.entries(flat.fieldErrors)) {
        mapped[key] = value?.[0] || '';
      }
      setErrors(mapped);
      return { success: false, errors: mapped };
    }

    setErrors({});
    return { success: true, data: result.data as z.infer<T> };
  }

  return { errors, validate };
}
