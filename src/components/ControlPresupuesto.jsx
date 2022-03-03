import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import 'react-circular-progressbar/dist/styles.css'

import { formatCurrency } from '../helpers/formatCurrency'

export const ControlPresupuesto = ({
  presupuesto,
  gastos = [],
  setGastos,
  setPresupuesto,
  setIsPresupuestoValid,
}) => {
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

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar tu presupuesto y gastos?')
    if (resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsPresupuestoValid(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={porcentaje}
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
          })}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>
          {formatCurrency(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span>
          {formatCurrency(Number(disponible))}
        </p>
        <p>
          <span>Gastado: </span>
          {formatCurrency(Number(gastado))}
        </p>
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear aplicación
        </button>
      </div>
    </div>
  )
}
