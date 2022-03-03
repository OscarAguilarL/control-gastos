import { ControlPresupuesto } from './ControlPresupuesto'
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({
  presupuesto,
  setPresupuesto,
  setIsPresupuestoValid,
  isPresupuestoValid,
  gastos,
  setGastos,
}) => {
  return (
    <header>
      <h1>Control de presupuesto</h1>
      {isPresupuestoValid ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsPresupuestoValid={setIsPresupuestoValid}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isPresupuestoValid={isPresupuestoValid}
          setIsPresupuestoValid={setIsPresupuestoValid}
        />
      )}
    </header>
  )
}
