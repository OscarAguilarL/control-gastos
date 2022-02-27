import { useState } from 'react'
import { Mensaje } from './Mensaje'

export const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsPresupuestoValid,
  isPresupuestoValid,
}) => {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje('no es un presupuesto valido')
      return
    }

    setMensaje('')
    setIsPresupuestoValid(true)
  }

  const handleInputChange = (e) => {
    if (!Number(e.target.value)) return
    return setPresupuesto(Number(e.target.value))
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={handleInputChange}
          />
        </div>

        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}
