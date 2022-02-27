import cerrarBtn from '../img/cerrar.svg'

export const Modal = ({ setModal }) => {
  const cerrarModal = () => {
    setModal(false)
  }

  return (
    <div className="modal">
      <div className="cerrar-modal" onClick={cerrarModal}>
        <img src={cerrarBtn} alt="Cerrar modal" />
      </div>
    </div>
  )
}
