export function convertToBRL(value: string, percentage: number = 0) {
  const valueAsNumber = value.replace(/\D+/g, "");
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(+valueAsNumber / percentage);
}

export function convertValue(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
