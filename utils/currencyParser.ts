export function currencyParser(amount: number, currency: string): string {
  return Intl.NumberFormat('en-' + currency, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}
