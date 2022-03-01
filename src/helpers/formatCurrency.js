export const formatCurrency = (cantidad) =>
  cantidad.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  })
