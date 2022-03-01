import { useState } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { generarId } from './helpers/generarId'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => setAnimarModal(true), 500)
  }

  const guardarGasto = (gasto) => {
    setGastos((prevState) => [...prevState, { id: generarId(), ...gasto }])
    setAnimarModal(false)
    setTimeout(() => setModal(false), 500)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />

      {isPresupuestoValid && (
        <div className="nuevo-gasto" onClick={handleNuevoGasto}>
          <img src={iconoNuevoGasto} alt="Nuevo gasto" />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  )
}

export default App
