import React from 'react'
import { Gasto } from './Gasto'

export const ListadoGastos = ({ gastos = [], setGastoEditar }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} setGastoEditar={setGastoEditar} />
      ))}
    </div>
  )
}
