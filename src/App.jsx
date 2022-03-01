import { useState } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gasto, setGasto] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => setAnimarModal(true), 500)
  }

  const guardarGasto = (gasto) => {
    setGasto((prevState) => [...prevState, gasto])
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
