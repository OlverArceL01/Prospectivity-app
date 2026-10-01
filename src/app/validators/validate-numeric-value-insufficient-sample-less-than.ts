import { ChildFieldContext } from "@angular/forms/signals";

export const validateNumericValueInsufficientSampleLessThan = (
  ctx: ChildFieldContext<string>,
  name: string,
  lessThan: string
) => {
  const value = ctx.value();

  if (value === null || value === undefined || value === '') {
    return {
      kind: 'numeric',
      message: `${name} must be a number, "IS" or "${lessThan}"`
    };
  }

  if (value === 'IS' || value === lessThan) {
    return;
  }

  if (!Number.isFinite(Number(value))) {
    return {
      kind: 'numeric',
      message: `${name} must be a number, "IS" or "${lessThan}"`
    };
  }
  return;
};
