export const generarId = () =>
  `${Math.random().toString(36).substring(2)}${Date.now().toString()}`
