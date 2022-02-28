import { useState } from 'react'
import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const [formValues, setFormValues] = useState({
    motivo: '',
    cantidad: 0,
    categoria: '',
  })

  const { motivo, cantidad, categoria } = formValues

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const cerrarModal = () => {
    setAnimarModal(false)

    setTimeout(() => setModal(false), 500)
  }

  return (
    <div className="modal">
      <div className="cerrar-modal" onClick={cerrarModal}>
        <img src={cerrarBtn} alt="Cerrar modal" />
      </div>

      <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="motivo">Motivo del gasto</label>
          <input
            type="text"
            id="motivo"
            name="motivo"
            value={motivo}
            onChange={handleInputChange}
            placeholder="Añade el motivo del gasto"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad del gasto</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={cantidad}
            onChange={handleInputChange}
            placeholder="Añade la cantidad del gasto, ej: 300"
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={handleInputChange}
          >
            <option value="">-- Seleccione una opción --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir gasto" />
      </form>
    </div>
  )
}