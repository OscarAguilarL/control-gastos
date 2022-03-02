import { useEffect, useState } from 'react'
import { formatCurrency } from '../helpers/formatCurrency'

export const ControlPresupuesto = ({ presupuesto, gastos = [] }) => {
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    )
    const totalDisponible = presupuesto - totalGastado

    setDisponible(totalDisponible)
    setGastado(totalGastado)
  }, [gastos])

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
