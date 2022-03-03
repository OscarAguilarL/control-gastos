import { useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css'

import { formatCurrency } from '../helpers/formatCurrency'

export const ControlPresupuesto = ({ presupuesto, gastos = [] }) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    )
    const totalDisponible = presupuesto - totalGastado

    // calcular el porcentaje gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2)

    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000)
  }, [gastos])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar value={porcentaje} />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatCurrency(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>
          {formatCurrency(Number(disponible))}
        </p>
        <p>
          <span>Gastado: </span>
          {formatCurrency(Number(gastado))}
        </p>
      </div>
    </div>
  )
}
