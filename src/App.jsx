import { useState } from 'react'
import { Header } from './components/Header'
import iconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isPresupuestoValid, setIsPresupuestoValid] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isPresupuestoValid={isPresupuestoValid}
        setIsPresupuestoValid={setIsPresupuestoValid}
      />

      {isPresupuestoValid && (
        <div className="nuevo-gasto">
          <img src={iconoNuevoGasto} alt="Nuevo gasto" />
        </div>
      )}
    </div>
  )
}

export default App
