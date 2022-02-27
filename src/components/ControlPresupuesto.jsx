import React from 'react'

export const ControlPresupuesto = ({ presupuesto }) => {
  const formatCurrency = (cantidad) =>
    cantidad.toLocaleString('es-MX', {
      style: 'currency',
      currency: 'MXN',
    })

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatCurrency(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>0
        </p>
        <p>
          <span>Gastado: </span>0
        </p>
      </div>
    </div>
  )
}
