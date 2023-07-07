export const currencyConverter = (value: number | string) => {
  if (typeof value === "string") {
    return parseInt(value).toLocaleString();
  } else{
    return value.toLocaleString();
  }
};
