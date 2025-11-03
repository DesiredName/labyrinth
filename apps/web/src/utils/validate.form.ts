import { useState } from 'react';
import { z } from 'zod';
import type { ZodObject } from 'zod';

function useValidateForm<T extends ZodObject<any>>(schema: T) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);

    if (!result.success) {
      const tree = z.treeifyError(result.error);
      const mapped: Record<string, string> = {};
      if (tree.errors && tree.properties) {
        for (const key in tree.properties) {
          const error = tree.properties[key];
          if (error?.errors?.length) {
            mapped[key] = error.errors[0];
          }
        }
      }
      setErrors(mapped);
      return { success: false, errors: mapped };
    }

    setErrors({});
    return { success: true, data: result.data as z.infer<T> };
  }

  return { errors, validate };
}

export { useValidateForm };
