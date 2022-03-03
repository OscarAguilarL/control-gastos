import { useState, useEffect } from 'react'
import { Filtros } from './components/Filtros'
import { Header } from './components/Header'
import { ListadoGastos } from './components/ListadoGastos'
import { Modal } from './components/Modal'
import { generarId } from './helpers/generarId'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')
      ? JSON.parse(localStorage.getItem('gastos'))
      : []
  )
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => setAnimarModal(true), 300)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (filtro) {
      // filtrar gastos por categoria
    }
  }, [filtro])

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setIsPresupuestoValid(true)
    }
  }, [])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => setAnimarModal(true), 300)
  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      // actualizar
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      )
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      // nuevo gasto
      setGastos((prevState) => [
        ...prevState,
        { ...gasto, id: generarId(), fecha: Date.now() },
      ])
    }

    setAnimarModal(false)
    setTimeout(() => setModal(false), 300)
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        presupuesto={presupuesto}
        gastos={gastos}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />

      {isPresupuestoValid && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  )
}

export default App
