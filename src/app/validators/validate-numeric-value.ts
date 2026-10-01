import { ChildFieldContext } from "@angular/forms/signals";

export const validateNumericValue = (ctx: ChildFieldContext<string>, name: string)=>{
  const value = ctx.value();
  if (value === null || value === undefined || value === '') {
    return;
  }
  if (!Number.isFinite(Number(value))) {
    return {
      kind: 'numeric',
      message: `${name} Must be a number or leave blank`
    };
  }
  return;
}