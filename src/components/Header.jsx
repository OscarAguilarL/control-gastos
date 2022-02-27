import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({
  presupuesto,
  setPresupuesto,
  setIsPresupuestoValid,
  isPresupuestoValid,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isPresupuestoValid ? (
        <p>Control de presupuesto</p>
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
