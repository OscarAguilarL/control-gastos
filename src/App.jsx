import { useState } from 'react'
import { Header } from './components/Header'
import { ListadoGastos } from './components/ListadoGastos'
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

    setTimeout(() => setAnimarModal(true), 300)
  }

  const guardarGasto = (gasto) => {
    setGastos((prevState) => [
      ...prevState,
      { id: generarId(), fecha: Date.now(), ...gasto },
    ])
    setAnimarModal(false)
    setTimeout(() => setModal(false), 300)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />

      {isPresupuestoValid && (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto" onClick={handleNuevoGasto}>
            <img src={iconoNuevoGasto} alt="Nuevo gasto" />
          </div>
        </>
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
