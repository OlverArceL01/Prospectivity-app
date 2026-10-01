import { ChildFieldContext } from "@angular/forms/signals";

export const validateNumericValueInsufficientSampleLessThanGreaterThan = (
  ctx: ChildFieldContext<string>,
  name: string,
  lessThan: string,
  greaterThan: string
) => {
  const value = ctx.value();

  if (value === null || value === undefined || value === '') {
    return {
      kind: 'numeric',
      message: `${name} must be a number, "IS", "${lessThan}" or "${greaterThan}"`
    };
  }

  if (value === 'IS' || value === lessThan || value === greaterThan) {
    return;
  }

  if (!Number.isFinite(Number(value))) {
    return {
      kind: 'numeric',
      message: `${name} must be a number, "IS", "${lessThan}" or "${greaterThan}"`
    };
  }
  return;
};
