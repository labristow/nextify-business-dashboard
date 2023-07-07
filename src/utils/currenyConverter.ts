export const currencyConverter = (value: number | string) => {
  if (typeof value === "string") {
    return parseInt(value).toLocaleString();
  } else if (typeof value === "number") {
    return value.toLocaleString();
  }
};
