import React from 'react'

export const Gasto = ({ gasto = {} }) => {
  const { motivo, cantidad, categoria, id } = gasto

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="gasto">{motivo}</p>
        </div>
      </div>
    </div>
  )
}
