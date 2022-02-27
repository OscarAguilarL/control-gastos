import { useState } from 'react'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
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

      {modal && <Modal setModal={setModal} />}
    </div>
  )
}

export default App
