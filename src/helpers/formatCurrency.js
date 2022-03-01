export const formatCurrency = (cantidad) =>
  Number(cantidad).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  })
