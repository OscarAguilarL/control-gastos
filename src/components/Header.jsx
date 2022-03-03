import { ControlPresupuesto } from './ControlPresupuesto'
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({
  presupuesto,
  setPresupuesto,
  setIsPresupuestoValid,
  isPresupuestoValid,
  gastos
}) => {
  return (
    <header>
      <h1>Control de presupuesto</h1>
      {isPresupuestoValid ? (
        <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
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
