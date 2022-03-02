import React from 'react'
import { formatCurrency } from '../helpers/formatCurrency'
import { formatearFecha } from '../helpers/formatearFecha'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const iconosDict = {
  ahorro: IconoAhorro,
  comida: IconoCasa,
  casa: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
}

export const Gasto = ({ gasto = {} }) => {
  const { motivo, cantidad, categoria, id, fecha } = gasto

  const fechaFormat = formatearFecha(fecha)

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={iconosDict[categoria]} alt={`Icono ${categoria}`} />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="gasto">{motivo}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{fechaFormat}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">{formatCurrency(cantidad)}</p>
    </div>
  )
}
