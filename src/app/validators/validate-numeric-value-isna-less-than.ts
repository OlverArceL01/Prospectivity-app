import { ChildFieldContext } from "@angular/forms/signals";

export const validateNumericValueIsNaLessThan = (
  ctx: ChildFieldContext<string>,
  name: string,
  lessThan: string
) => {
  const value = ctx.value();
  if (value === null || value === undefined || value === '' || value === lessThan) {
    return;
  }
  if (!Number.isFinite(Number(value))) {
    return {
      kind: 'numeric',
      message: `${name} must be a number, leave blank or "${lessThan}"`
    };
  }
  return;
};
