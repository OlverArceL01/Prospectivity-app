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
