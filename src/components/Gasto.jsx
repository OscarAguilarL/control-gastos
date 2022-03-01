import React from 'react'
import { formatCurrency } from '../helpers/formatCurrency'
import { formatearFecha } from '../helpers/formatearFecha'

export const Gasto = ({ gasto = {} }) => {
  const { motivo, cantidad, categoria, id, fecha } = gasto

  const fechaFormat = formatearFecha(fecha)

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="gasto">{motivo}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{fechaFormat}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">{formatCurrency(Number(cantidad))}</p>
    </div>
  )
}
