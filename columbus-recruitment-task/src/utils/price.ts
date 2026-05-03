export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(price / 100);
}

export function calculateDiscountedPrice(price: number, percentage: number) {
  return Math.round(price * (1 - percentage / 100));
}

